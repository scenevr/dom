var test = require('tape');
var SceneDOM = require('../');
var Scene = require('../elements/scene');

test('Document', function (t) {
  t.test('document.scene created by default', function (t) {
    var doc = SceneDOM.createDocument();
    t.ok(doc.scene instanceof Scene, 'document.scene instance of Scene object');
    t.end();
  });

  t.test('UUIDs work', function (t) {
    var doc = SceneDOM.createDocument();
    var box = doc.createElement('box');
    doc.scene.appendChild(box);

    t.ok(box.uuid, 'New element has a UUID');
    t.equals(box, doc.getElementByUUID(box.uuid), 'document.getElementByUUID() returns correct object');

    t.end();
  });

  t.test('document.appendChild appends to scene', function (t) {
    var doc = SceneDOM.createDocument();
    var box = doc.createElement('box');
    doc.appendChild(box);

    t.equals(box, doc.scene.childNodes[0], 'appended element in doc.scene.childNodes[0]');
    t.end();
  });

  t.end();
});
