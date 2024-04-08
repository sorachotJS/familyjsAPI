var express = require('express')
var cors = require('cors')
const cookieParser = require('cookie-parser')
const loginRoutes = require("./Routes/loginRoutes")
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: '118.27.130.235',
//   user: 'zbimdpsz_namettra',
//   password: 'nN$ametra514514',
//   database: 'zbimdpsz_namettra'
// });



var app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", async (req, res, next) => {
  res.send("Hello from express.");
});

app.use("/ApiNode/", loginRoutes);
// app.get('/ApiNode', function (req, res, next) {
//   connection.query(
//     'SELECT * FROM `tb_user`',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       res.json(results)
//     }
//   );
// })

// app.post('/ApiNode', function (req, res, next) {
//  const aa = req.body
//  console.log(aa.glossary)
//  res.json({ success: true, message: `Data received successfully ${aa.glossary}` });
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});