'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _category = require('./routes/category');

var _category2 = _interopRequireDefault(_category);

var _product = require('./routes/product');

var _product2 = _interopRequireDefault(_product);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.port || 3000;
// use dotenv
_dotenv2.default.config({
    silent: true
});

//mongoose connection
_mongoose2.default.Promise = global.Promise;
/**
 * Set up default mongoose connection
 */
_mongoose2.default.connect("mongodb://mlab123:mlab123@ds141611.mlab.com:41611/sumitt12690", { useNewUrlParser: true }).catch(function (err) {
    console.log('*** Can Not Connect to Mongo Server:');
});

// Express app setup
var app = (0, _express2.default)();

// view engine
app.set('views', _path2.default.join(__dirname, './views'));
app.set('view engine', 'pug');

// logger
app.use((0, _morgan2.default)('combined'));

// body parser
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// cookie parser
app.use((0, _cookieParser2.default)());
app.use((0, _cors2.default)());

// serve static files from 'public'
app.use(_express2.default.static(_path2.default.join(__dirname, './public')));

// use routes
app.use('/category', _category2.default);
app.use('/product', _product2.default);

app.use('/', function (req, res) {
    res.statusCode = 200; //send the appropriate status code
    res.json({ status: "success", message: "Mongo API", data: {} });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log('not found');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: app.get('env') === 'development' ? err : {}
    });
    console.log(app.get('env'));
    next();
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

// export default app;
/*
var Schema = mongoose.Schema;
var testSchema = new Schema({
    testvalue: Number,
});
var Test = mongoose.model("Test", testSchema);
app.get('/save-array', function (req, res) {
    var myArray = ['1', '2', '3', '4'];
    // myArray.forEach(function (value) {
    //     var Testobj = new Test({
    //         testvalue: value,
    //     });
    //     Testobj.save(function (error) {
    //         console.log("Your value has been saved!"+value);
    //         if (error) {
    //             console.error(error);
    //         }
    //     });
    // });
    async.eachSeries(myArray, function (value, callback) {
        var Testobj = new Test({
            testvalue: value,
        });
        Testobj.save(function (error) {
            console.log("Your value has been saved!" + value);
            if (error) {
                console.error(error);
            }
            callback();
        });
    });
});
*/
//# sourceMappingURL=app.js.map