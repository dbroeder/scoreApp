import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

/*
  Generated class for the PlayerData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlayerData {

    private _db;
    private _players;
    
    initDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        
        this._db = new PouchDB('players.db', { adapter: 'cordova-sqlite' });
        window["PouchDB"] = PouchDB;
    }
    
    add(player) {  
        return this._db.post(player);
    }

    update(player) {  
        return this._db.put(player);
    }

    delete(player) {  
        return this._db.remove(player);
    }

    getAll() {  

        if (!this._players) {
            return this._db.allDocs({ include_docs: true})
                .then(docs => {

                    // Each row has a .doc object and we just want to send an 
                    // array of player objects back to the calling controller,
                    // so let's map the array to contain just the .doc objects.

                    this._players = docs.rows.map(row => {
                        // Dates are not automatically converted from a string.
                        return row.doc;
                    });

                    // Listen for changes on the database.
                    this._db.changes({ live: true, since: 'now', include_docs: true})
                        .on('change', this.onDatabaseChange);

                    return this._players;
                });
        } else {
            // Return cached data as a promise
            return Promise.resolve(this._players);
        }
    }

    getPlayers(){
        return this._players;
    }

    private onDatabaseChange = (change) => {  
        var index = this.findIndex(this._players, change.id);
        var player = this._players[index];

        if (change.deleted) {
            if (player) {
                this._players.splice(index, 1); // delete
            }
        } else {
            change.doc.Date = new Date(change.doc.Date);
            if (player && player._id === change.id) {
                this._players[index] = change.doc; // update
            } else {
                this._players.splice(index, 0, change.doc) // insert
            }
        }
    }

    // Binary search, the array is by default sorted by _id.
    private findIndex(array, id) {  
        var low = 0, high = array.length, mid;
        while (low < high) {
        mid = (low + high) >>> 1;
        array[mid]._id < id ? low = mid + 1 : high = mid
        }
        return low;
    }

}
