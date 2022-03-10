const express = require("express");
const morgan = require("morgan");
const html = require("html-template-tag");
const main = require("./views/main");
const { db } = require('./models');


//const layout = require("./views/layout"); // don't need to require because main.js is already requiring it

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  //console.log("hello world");
  res.send(main(""));
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

async function tables (){
  await db.sync({force: true})
}

tables()


app.listen(1337);
