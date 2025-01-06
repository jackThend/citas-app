import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private sqlite: SQLiteConnection | null = null;
  private db: SQLiteDBConnection | null = null;

  async initializePlugin(): Promise<void> {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    console.log('SQLite plugin initialized');
  }

  async createDatabase(): Promise<void> {
    if (!this.sqlite) {
      console.error('SQLite is not initialized');
      return;
    }

    try {
      this.db = await this.sqlite.createConnection('citasDB', false, 'no-encryption', 1, false);
      await this.db.open();
      await this.db.execute(`
        CREATE TABLE IF NOT EXISTS citas (
          id INTEGER PRIMARY KEY NOT NULL,
          frase TEXT NOT NULL,
          autor TEXT NOT NULL
        );
      `);
      console.log('Database and table created');
    } catch (error) {
      console.error('Error creating database:', error);
    }
  }

  async addCita(frase: string, autor: string): Promise<void> {
    if (!this.db) {
      console.error('Database not initialized');
      return;
    }

    try {
      await this.db.run(`INSERT INTO citas (frase, autor) VALUES (?, ?)`, [frase, autor]);
      console.log('Cita added to database');
    } catch (error) {
      console.error('Error adding cita:', error);
    }
  }

  async getCitas(): Promise<any[]> {
    if (!this.db) {
      console.error('Database not initialized');
      return [];
    }

    try {
      const result = await this.db.query('SELECT * FROM citas');
      return result.values || [];
    } catch (error) {
      console.error('Error fetching citas:', error);
      return [];
    }
  }
}
