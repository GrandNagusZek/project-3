require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://iliyasmallard:Password123@cluster0.d2af45s.mongodb.net/" || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mernshopping');

module.exports = mongoose.connection;
