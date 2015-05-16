var Document = require('./lib/document');
var Scene = require('./elements/scene');
var Vector = require('./forks/vector');
var Euler = require('./forks/euler');

module.exports = {
  createDocument: Document.createDocument,
  createDocumentFromXML: Document.createDocumentFromXML,
  Document: Document,
  Scene: Scene,
  Vector: Vector,
  Euler: Euler
};
