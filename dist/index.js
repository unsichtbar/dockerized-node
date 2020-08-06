"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Constants
var PORT = process.env.PORT;
var HOST = '0.0.0.0';
// App
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Hello world!\n');
});
app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
console.log("And another line, for testing!");
