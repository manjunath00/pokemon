require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const pokemonRoutes = require("./routes/pokemon");

// database connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((error) => {
    console.log("DAtabase not connected", error);
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", pokemonRoutes);

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
});
// }

/* app.get("/", (req, res) => {
  res.send(`<h1>Hello There </h1>`);
});
 */

//port
const PORT = process.env.PORT || 3003;

//Starting the server
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

module.exports = app;
