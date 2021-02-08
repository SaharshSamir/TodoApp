const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/Users");
require("./models/Todos");
require("./services/passport");

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
//the three middlewares to modify the incoming req.
//1.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//to set up the functions for serializeUser and deserializeUser
app.use(passport.initialize());
//alter the user property in the req object and change it to an actual deserializeUser
//attaching the deserializedUser to the user property in req object
app.use(passport.session());

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
require("./routes/authRoutes")(app);
require("./routes/todoRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
