"use strict";

const parse = require("./parser");
const print = require("./printer");

const languages = [
  {
    name: "Shell",
    parsers: ["sh"],
    extensions: [
      ".sh",
      ".bash",
      ".zsh"
    ]
  }
];

const parsers = {
  sh: {
    parse,
    astFormat: "sh"
  }
};

const printers = {
  sh: {
    print
  }
};

module.exports = {
  languages,
  parsers,
  printers,
};
