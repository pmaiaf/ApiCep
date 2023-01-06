const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cep = require("./routes/cep");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "src/views"));

app.use("/", cep);

app.listen(3000, () => {
  console.log("Rodando");
});
