import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private db: SQLiteDBConnection | null = null;

  async initializeDatabase() {
    this.db = await CapacitorSQLite.createConnection({
      database: 'citas.db',
      version: 1,
      encrypted: false,
      mode: 'no-encryption'
    });
    await this.db.open();
    console.log('Database initialized');
  }
}
