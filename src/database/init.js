const { init } = require('express/lib/application');
const Database = require('./config');

const initDb = {
  async init() {
    const database = await Database()
    await database.exec(`CREATE TABLE  rooms(
                        id INTEGER PRIMARY KEY, 
                        password TEXT
    )`);
    await database.exec(`
    CREATE TABLE  questions(
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      titulo TEXT,
      read INT 
    )`);
    await database.close()
  }
}

initDb.init();


