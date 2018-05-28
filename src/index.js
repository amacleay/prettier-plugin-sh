"use strict";

const parse = require("./parser");

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

module.exports = {
  languages,
  parsers,
};
