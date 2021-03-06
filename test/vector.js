var test = require('tape');
var Vector = require('../lib/vector.js');

test('Vector', function (t) {
  test('should set and get', function (t) {
    var v = new Vector(1, 2, 3);
    t.equal(v.x, 1, 'x');
    t.equal(v.y, 2, 'y');
    t.equal(v.z, 3, 'z');
    t.end();
  });

  test('should clone', function (t) {
    var v;
    v = new Vector(1, 2, 3);
    v.clone().x = 100;
    t.equal(v.x, 1, 'x preserved');
    t.end();
  });

  test('should trigger onChanged', function (t) {
    t.plan(1);

    var v = new Vector(1, 2, 3);
    v.onChanged = function () {
      t.ok(true, 'onChanged called');
    };
    v.x += 100;
  });

  test('should allow addChangeObserver()', function (t) {
    t.plan(3);

    var v = new Vector(1, 2, 3);
    v.addChangeObserver(function () {
      t.ok(true, 'change observer called');
    });

    v.x += 100;
    v.y += 100;
    v.z += 100;
    t.end();
  });

  test('should parse', function (t) {
    var v;
    v = Vector.fromString('1 2 3');
    t.equal(v.x, 1, 'x');
    t.equal(v.y, 2, 'y');
    t.equal(v.z, 3, 'z');
    t.end();
  });

  t.end();
});
