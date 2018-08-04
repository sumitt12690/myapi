import path from 'path';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import category from './routes/category';
import product from './routes/product';
import mongoose from 'mongoose';

const port = process.env.port || 3000;

//mongoose connection
mongoose.Promise = global.Promise;
/**
 * Set up default mongoose connection
 */
mongoose.connect("mongodb://mlab123:mlab123@ds141611.mlab.com:41611/sumitt12690", 
{ useNewUrlParser: true })
.catch((err) => {
    console.log('*** Can Not Connect to Mongo Server:');
});


// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// logger
app.use(logger('combined'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());
app.use(cors());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/category', category);
app.use('/product', product);

app.use('/', function (req, res) {
    res.statusCode = 200;//send the appropriate status code
    res.json({ status: "success", message: "Mongo API", data: {} });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    console.log('not found');
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: app.get('env') === 'development' ? err : {},
    });
    console.log(app.get('env'));
    next();
});

app.listen(port,function () {
    console.log(`Listening on port ${port}`);
});
