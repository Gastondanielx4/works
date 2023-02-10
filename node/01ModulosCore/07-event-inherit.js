"use strict";

var EventEmitter = require("events").EventEmitter,
  inherits = require("util").inherits;

var Clock = function (params) {
  var self = this;

  setInterval(() => {
    self.emit("tictac");
  }, 1000);
};

inherits(Clock, EventEmitter);

Clock.prototype.theTime = function (params) {
  var date = new Date(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = hrs + ":" + min + ":" + sec;

  console.log(msg);
};

var cucu = new Clock();

cucu.on("tictac", function () {
  cucu.theTime();
});
