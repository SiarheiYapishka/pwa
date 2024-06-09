import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface AppStateDB extends DBSchema {
  appState: {
    key: string;
    value: any;
  };
}

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  private dbPromise: Promise<IDBPDatabase<AppStateDB>>;

  constructor() {
    this.dbPromise = openDB<AppStateDB>('app-state-db', 1, {
      upgrade(db) {
        db.createObjectStore('appState');
      },
    });
  }

  async getState(key: string): Promise<any> {
    const db = await this.dbPromise;
    return db.get('appState', key);
  }

  async setState(key: string, value: any): Promise<void> {
    const db = await this.dbPromise;
    await db.put('appState', value, key);
  }
}