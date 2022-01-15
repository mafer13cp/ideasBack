if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
const express = require('express');
const morgan = require('morgan');

//Initialice
const app = express();
const db = require('./database')

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//route
app.use('/ideas',require('./routes/ideas'));


//Server start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
//home page
app.get('/', (req, res) => {
    res.status(200).send({'Try':['/ideas']});
});