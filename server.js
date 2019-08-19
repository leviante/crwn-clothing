//using express, import necessary tools as well
//we use require instead of es6 imports, because what we write is node code, we don't have access to es6 imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//path is a native module, let's us build out pathing for our directories
//allows us to dynamically build paths from our current directory to where we want to go
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//call stripe library after this call ^. because stripe requires that secret key we put inside .env, and we can access it in here by using dotenv.
//stripe returns a function which wants the secret key as an argument, we do it in the same line
//we can access .env folder because of dotenv, it automatically looks for .env file inside our root and adds it to process.env
//now stripe gives us the object that allows us to make charges
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express(); //instantiate a new express application

//setup our application's port, use the value if process.env has one, otherwise use 5000
const port = process.env.PORT || 5000;

//make sure that any of the requests coming in, process their body tag and convert to JSON so that we can use it
app.use(bodyParser.json());

//urlencoded makes sure that the url strings we're getting in and parsing out don't contain things like spaces or symbols.
app.use(bodyParser.urlencoded({ extended: true }));

//cors stands for cross origin request, it checks the origin of two different urls and makes sure that they both have the same origin, it's a security feature 
//By using this we're enabling our front end to communicate with backend because they both have different origins (localhost:3000 vs localhost:5000)
app.use(cors());

//serve our client application if it's production
//
if(process.env.NODE_ENV === "production"){
    //use this express.static middleware (1)
    //that allows us to serve certain files from the path we're passing (2)
    //we use path library and joining __dirname, __dirname
    //tells use what directory we're currently in and then we add client/build at the end (3)
    app.use(express.static(path.join(__dirname, "client/build")));

    //for routes that matches the first parameter, invoke this function(1)
    //Send necessary files
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

//start listening your port for errors
app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port);
}); 

//build payment route for stripe checkout
app.post("/payment", (request, response) => {
    const body = { //create the object that will be sent to Stripe API, use token we get from front end
        source: request.body.token.id,
        amount: request.body.amount,
        currency: "usd"
    };

    //use body and pass it to stripe library
    //create a charge first (1)
    //create a callback function that will contain a request and response that's coming from the stripe API
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr){
            response.status(500).send({error: stripeErr});
        } else{
            response.status(200).send({success: stripeRes}); 
        }

    });
});