let mongoose = require("mongoose");
let db = require("../models")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bikes", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let bikeSeed = [

  {
    model: "Colnago C64",
    zip: 94158,
    price: 20,
    color: "Red",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c277049",
    rented: false,
    // renterId: "",
  },

  {
    model: "Colnago C64",
    zip: 94158,
    price: 20,
    color: "Red",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c277049",
    rented: false,
  },

  {
    model: "Ventura Comp",
    zip: 94107,
    price: 15,
    color: "Silver",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c27704a",
    rented: false,
  },

  {
    model: "Liv Avail Advanced Pro 1",
    zip: 94131,
    price: 14,
    color: "White",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c27704b",
    rented: false,
  },

  {
    model: "Specialized Tarmac",
    zip: 94110,
    price: 10,
    color: "Brown",
    wheels: 3,
    ownerId: "604e381fcf75e14c3c27704c",
    rented: false,
  },

  {
    model: "Trek Domane SLR7",
    zip: 96161,
    price: 22,
    color: "Blue",
    wheels: 4,
    ownerId: "604e381fcf75e14c3c27704d",
    rented: false,
  },

  {
    model: "Maverick X01 RSV",
    zip: 94130,
    price: 25,
    color: "Purple",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c27704e",
    rented: false,
  },

  {
    model: "Maverick X01 RSV",
    zip: 94601,
    price: 24,
    color: "Orange",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c27704f",
    rented: true,
  },

  {
    model: "Marin Hawk Hill 1",
    zip: 94801,
    price: 23,
    color: "Green",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c277050",
    rented: false,
  },

  {
    model: "Pivot Switchblade Pro Xt/XTR",
    zip: 94590,
    price: 21,
    color: "Black",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c277051",
    rented: false,
  },

  {
    model: "Rockay Mountain Growler 20",
    zip: 94535,
    price: 17,
    color: "Yellow",
    wheels: 2,
    ownerId: "604e381fcf75e14c3c277052",
    rented: false,
  },

  {
    model: "Fuel EX 9.9 X01",
    zip: 94621,
    price: 12,
    color: "Grey",
    wheels: 12,
    ownerId: "604e381fcf75e14c3c277053",
    rented: true,
  },

];



db.Bike.deleteMany({})
  .then(() => db.Bike.collection.insertMany(bikeSeed))
  .then(data => {
    console.log("Added bike records!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
