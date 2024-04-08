const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '118.27.130.235',
    user: 'zbimdpsz_namettra',
    password: 'nN$ametra514514',
    database: 'zbimdpsz_namettra'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
  });
  
    module.exports = connection;