const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const express = require('express');
const app = express();

const emailRoutes = require('./src/email.route.js');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send("Main page");
});
app.use('/api', emailRoutes);
app.use('*', (req, res) => {
    res.send("Page not found").status(200);
});
app.listen(port, () => {
    console.log(`Server running on port no. ${port}`);
});