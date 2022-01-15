if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
const express = require('express');
const morgan = require('morgan');

//Initialice
const app = express();
const db = require('./database')

//Settings
app.set('port', PORT);

//Middleware
app.use(morgan());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//route
app.use('/ideas',require('./routes/ideas'));


//Server start
app.listen(PORT, () => {
    console.log('Server on port', PORT);
})
//home page
app.get('/', (req, res) => {
    res.status(200).send({'Try':['/ideas']});
});