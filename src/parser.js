"use strict";

const parser = require("bash-parser");

function parse(script) {
  const ast = parser(script);

  return ast;
}

module.exports = parse;
