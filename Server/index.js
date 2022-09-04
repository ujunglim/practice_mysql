const express = require('express'); 
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./models/user');
const mysql = require('mysql');
const cors = require('cors');

const app = express(); // make server

// mongoose.connect(
//   'mongodb+srv://ujunglim:1234qwer@cluster0.yx9elte.mongodb.net/?retryWrites=true&w=majority',
//   {useNewUrlParser: true} // 몽구스에서 오는 deprecation 경고를 없애기위해
// ).then(() => console.log('DB connected!'))
// .catch(err => console.error(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// // routing
// app.post('/api/users/register', (req, res) => {
// 	// req is json. to be able to read json use bodyParser, then put in md
// 	const user = new User(req.body); // put all info to md
// 	user.save()
// 		.then(() => res.status(200).json(`User ${req.body.name} added!`))
// 		.catch((err) => res.status(400).json(`Unable to add user ${err}`))
// })

// mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '370123',
  database: 'sys'
})

connection.connect();

connection.query('SELECT email, firstName FROM sys.login WHERE age = 19;', (err, rows, fields) => {
  if (err) throw err

  // console.log(rows)
})

app.post('/api/email', (req, res) => {
	console.log(req.body)
  const sql = `SELECT firstName FROM sys.login WHERE email = '${req.body.email}';`
  console.log(sql)
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
	  res.send({firstname: rows[0].firstName});
  })
});

app.listen(5000); // server listen 5000
console.log('listening 5000')