const express = require(`express`);
const app = express();
const connectDB = require("./config/db");
const adminRouter = require(`../routes/adminRoutes`);
const blogRouter = require("../routes/blogRoutes");
var cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cookieParser = require("cookie-parser");

var path = require("path");

var logger = require("morgan");

const whitelist = ["*"];

app.use((req, res, next) => {
  const origin = req.get("referer");
  const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
  if (isWhitelisted) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,Content-Type,Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
  }
  // Pass to next layer of middleware
  if (req.method === "OPTIONS") res.sendStatus(200);
  else next();
});

const setContext = (req, res, next) => {
  if (!req.context) req.context = {};
  next();
};
app.use(setContext);

app.use(express.static(`public`));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://blog-front-seven-cyan.vercel.app",
    methods: ["POST", "GET"],
  })
); // Use this after the variable declaration
app.use(blogRouter);
app.use(adminRouter);
connectDB();
app.listen(3001, () => {
  console.log("running");
});

module.exports = app;
