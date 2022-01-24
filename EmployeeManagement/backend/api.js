var Db = require('./dboperations');
var Order = require('./order');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/orders').get((request, response) => {
    dboperations.getOrders().then(result => {
        response.json(result);
        //console.log(result);
    })
})

router.route('/orders/:id').get((request, response) => {
    dboperations.getOrder(request.params.id).then(result => {
        response.json(result);
    })
})

router.route('/orders').post((request, response) => {
    let x = {...request.body }
    dboperations.add(x).then(result => {
        response.status(201).json(result);
    })
})

router.route('/orders').put((request, response) => {
    let Order = {...request.body }
    dboperations.update(Order).then(result => {
        response.json(result);
    })
})

router.route('/orders/:id').delete((request, response) => {
    dboperations.del(request.params.id).then(result => {
        response.json(result);
    })



})

var port = process.env.PORT;
app.listen(port);
console.log('API is runnning at ' + port);