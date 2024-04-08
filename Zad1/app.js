const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
const PORT = 3000;


app.set("view engine", "ejs");


function ListeningListener(){
    console.log(`Server is runing on ${PORT}`);
};

app.get('/', (req, res) => {
    res.render('Home', {title: 'Home'});
});

app.get('/success', (req, res) => {
    res.render('Success', {title: 'Success'});
});

app.get('/students-list', (req, res) => {
    res.render('List', {title: 'List'});
});

app.post('/add-student', (req, res) => {
    res.redirect('AddStudent', {title: 'AddStudent'});
});



app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));




app.listen(PORT,ListeningListener());