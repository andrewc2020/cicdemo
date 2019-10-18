
import 'dotenv/config';
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
import students from './dummy/students';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/students', (req, res) => {
  res.status(200).json({students});
});
app.post('/students/create',(req,res)=>{
  if(req.body.data.student.name.length <1 ){
    res.status(422).send('a student must have a name');
    
  }
  if(req.body.data.student.age <18 ){
    res.status(422).send('a student must be at least 18');
  }
  students.push(req.body.data.student);
  res.status(200).json({students});
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App at: http://localhost:${port}`);
  }
});
module.exports = app;