let mongoose = require("mongoose");
let db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bikes", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let userSeed = [

    {
    email: "liz@bikes.com",
    password: "LizPassword",
    displayName: "Liz",
    confirmed: true,
    },

    {
    email: "lauren@bikes.com",
    password: "LaurenPassword",
    displayName: "Lauren",
    confirmed: true,
    },

    {
    email: "jamily@bikes.com",
    password: "JamilyPassword",
    displayName: "Jamily",
    confirmed: true,
    },

    {
    email: "james@bikes.com",
    password: "JamesPassword",
    displayName: "James",
    confirmed: true,
    },

    {
    email: "john@bikes.com",
    password: "JohnPassword",
    displayName: "John",
    confirmed: true,
    },

    {
    email: "ryan@bikes.com",
    password: "RyanPassword",
    displayName: "Ryan",
    confirmed: true,
    },

    {
    email: "thomas@teaches.com",
    password: "ThomasPassword",
    displayName: "ILoveThe90s",
    confirmed: true,
    },

    {
    email: "Donny@TA.com",
    password: "DonnyPassword",
    displayName: "Solder King",
    confirmed: true,
    },

    {
    email: "Clarence@TA.com",
    password: "ClarencePassword",
    displayName: "Fixer",
    confirmed: true,
    },

    {
    email: "Jeff@TA.com",
    password: "JeffPassword",
    displayName: "Beavis",
    confirmed: true,
    },

    {
    email: "Sergio@TA.com",
    password: "SergioPassword",
    displayName: "Team Megan and Harry",
    confirmed: true,
    },

    {
    email: "Nick@TA.com",
    password: "NickPassword",
    displayName: "No Bike Nick",
    confirmed: true,
    },

];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log("Added User records!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
