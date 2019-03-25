let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;
let router = express.Router();
let mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let connectToMongoose = function () {
    mongoose.connect('mongodb://jack:po43277d@ds263295.mlab.com:63295/jack-react-redux-realm-api', { useNewUrlParser: true, connectTimeoutMS: 3000 }, (err) => {
        if (err) {
            console.log(err);
            console.log('Retrying Connection');
            connectToMongoose();
        } else {
            console.log("connection Successful");
        }
    });
}

connectToMongoose();

//CORS middleware
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

router.use(allowCrossDomain);

require('./api/routes/characters/index')(router);

app.use('/api', router);

app.listen(port);
