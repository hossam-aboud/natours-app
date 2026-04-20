const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1) MIDDLEWARES
app.use(express.json()) // this is a middleware that allows us to parse the body of the request and make it available in req.body

console.log(process.env.NODE_ENV); // development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')) // this is a middleware that logs the request to the console
}


app.use(express.static(`${__dirname}/public`)) // this is a middleware that serves static files from the public folder (e.g. index.html , style.css , etc.)
app.use ( (req , res , next) => {
    console.log('Hello from the middleware 👋') ;
    next();
});

app.use ( (req , res , next) => {
    req.requestTime = new Date().toISOString();
    next();
});
app.get('/' , (req , res) => {
    // res.status(200).send('Hello from the server side.');
    res.status(200).json({
        message: 'Hello from the server side.',
        app: 'Natours'
    });
});

app.post ('/' , (req , res ) => {

    res.send('You can post to this endpoint ...');
})


// 2) ROUTE HANDLERS



    // get all tours 
// app.get('/api/v1/tours' , getAllTours);

// app.patch ('/api/v1/tours/:id' , updateTour );
// app.post ('/api/v1/tours' , createTour);

// app.delete ('/api/v1/tours/:id' , deleteTour);
// // params 
// //.  /api/v1/tours/:id/:y? (y is optional)
// app.get ('/api/v1/tours/:id' ,getTour );

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users' , userRouter);


// 4) START SERVER

module.exports = app ; // to export the app to be used in other files (e.g. for testing)




// express it's 100% node js 