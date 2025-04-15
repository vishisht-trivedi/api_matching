const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const methodOverride = require('method-override');

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//login Routes
const authRoutes = require('./routes/authRoutes');
app.use('/login', authRoutes);  

//account route
const accountRoutes = require('./routes/accountRoutes');
app.use('/accounts', accountRoutes);  

// Start server
app.listen(port, () => {
  console.log("listening on port", port);
});
