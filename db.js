/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://praveen:123@127.0.0.1:5432/lunchly");

db.connect();

module.exports = db;
