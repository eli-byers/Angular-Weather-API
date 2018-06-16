let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    router = require('./config/routing.js');

let port = process.env.PORT || 3003;
let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './public/dist')));

app.use('/', router)

app.listen(port, function(){
    console.log(`[listening] localhost:${port}`);
})