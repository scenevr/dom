var Document = require('./lib/document');
var Vector = require('./forks/vector');
var Euler = require('./forks/euler');

module.exports = {
  createDocument: Document.createDocument,
  Document: Document,
  Vector: Vector,
  Euler: Euler
};
