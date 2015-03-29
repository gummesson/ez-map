/**
 * Dependencies
 */

var test  = require('tape')
var EzMap = require('../')

/**
 * Tests
 */

test('EzMap()', function(t) {
  var map = new EzMap([
    ['foo', 'bar']
  ])

  t.test('.set(key[, val])', function(assert) {
    map.set('baz')
    assert.deepEqual(map._keys, ['foo', 'baz'])
    assert.deepEqual(map._values, ['bar', undefined])
    assert.end()
  })

  t.test('.has(key)', function(assert) {
    assert.equal(map.has('foo'), true)
    assert.equal(map.has('baz'), true)
    assert.equal(map.has('qux'), false)
    assert.end()
  })

  t.test('.get(key)', function(assert) {
    assert.deepEqual(map.get('foo'), 'bar')
    assert.deepEqual(map.get('baz'), undefined)
    assert.end()
  })

  t.test('.keys()', function(assert) {
    assert.deepEqual(map.keys(), ['foo', 'baz'])
    assert.end()
  })

  t.test('.values()', function(assert) {
    assert.deepEqual(map.values(), ['bar', undefined])
    assert.end()
  })

  t.test('.size()', function(assert) {
    assert.equal(map.size(), 2)
    assert.end()
  })

  t.test('.entries()', function(assert) {
    assert.deepEqual(map.entries(), [['foo', 'bar'], ['baz', undefined]])
    assert.end()
  })

  t.test('.forEach()', function(assert) {
    var results = []
    map.forEach(function(v, k, m) {
      results.push(k + v)
      assert.equal(m instanceof EzMap, true)
    })
    assert.deepEqual(results, ['foobar', 'bazundefined'])
    assert.end()
  })

  t.test('.delete()', function(assert) {
    assert.equal(map.delete('baz'), true)
    assert.equal(map.delete('qux'), false)
    assert.equal(map.has('baz'), false)
    assert.equal(map.size(), 1)
    assert.end()
  })

  t.test('.clear()', function(assert) {
    map.clear()
    assert.equal(map.has('foo'), false)
    assert.equal(map.size(), 0)
    assert.end()
  })

  t.end()
})
