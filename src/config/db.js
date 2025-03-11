import mysql from "mysql2/promise";

const tienda = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "tienda",
});

export default tienda;
