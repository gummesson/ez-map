/**
 * Dependencies
 */

var isArray = Array.isArray

/**
 * Initialize `EzMap`.
 *
 * @constructor
 * @param {array} arr
 *
 * @api public
 */

function EzMap(arr) {
  this._keys   = []
  this._values = []
  if (isArray(arr) && arr.length)
    this._initial(arr)
}

/**
 * Set initial entries.
 *
 * @param  {array} arr
 * @return {void}
 *
 * @api private
 */

EzMap.prototype._initial = function(arr) {
  var self = this
  arr.forEach(function(entry) {
    var key   = entry[0]
    var value = entry[1]
    self._keys.push(key)
    self._values.push(value)
  })
}

/**
 * Get the index of `key`.
 *
 * @param  {mixed} key
 * @return {number}
 *
 * @api private
 */

EzMap.prototype._index = function(key) {
  return this._keys.indexOf(key)
}

/**
 * Set an entry.
 *
 * @param  {mixed} key
 * @param  {mixed} value
 * @return {this}
 *
 * @api public
 */

EzMap.prototype.set = function(key, value) {
  var index = this._index(key)
  if (index < 0) index = this._keys.length
  this._keys[index]   = key
  this._values[index] = value
  return this
}

/**
 * Check if `key` is an entry.
 *
 * @param  {mixed} key
 * @return {boolean}
 *
 * @api public
 */

EzMap.prototype.has = function(key) {
  return this._index(key) >= 0
}

/**
 * Get an entry.
 *
 * @param  {mixed} key
 * @return {mixed}
 *
 * @api public
 */

EzMap.prototype.get = function(key) {
  var index = this._index(key)
  if (index >= 0) return this._values[index]
}

/**
 * Get the keys of all entries.
 *
 * @return {array}
 *
 * @api public
 */

EzMap.prototype.keys = function() {
  return this._keys
}

/**
 * Get the values of all entries.
 *
 * @return {array}
 *
 * @api public
 */

EzMap.prototype.values = function() {
  return this._values
}

/**
 * Get all entries.
 *
 * @return {array}
 *
 * @api public
 */

EzMap.prototype.entries = function() {
  var keys    = this._keys
  var values  = this._values
  var entries = []
  keys.forEach(function(_, index) {
    entries.push([keys[index], values[index]])
  })
  return entries
}

/**
 * Get the size of all entries.
 *
 * @return {number}
 *
 * @api public
 */

EzMap.prototype.size = function() {
  return this.entries().length
}

/**
 * Iterate over all entries with `iterator`.
 *
 * @param  {function} iterator
 * @return {void}
 *
 * @api public
 */

EzMap.prototype.forEach = function(iterator) {
  var entries = this.entries()
  var context = this
  entries.forEach(function(entry) {
    var key   = entry[0]
    var value = entry[1]
    iterator(value, key, context)
  })
}

/**
 * Delete an entry.
 *
 * @param  {mixed} key
 * @return {boolean}
 *
 * @api public
 */

EzMap.prototype['delete'] = function(key) {
  var index = this._index(key)
  if (index >= 0) {
    this._keys.splice(index, 1)
    this._values.splice(index, 1)
    return true
  }
  return false
}

/**
 * Clear all entries.
 *
 * @return {void}
 *
 * @api public
 */

EzMap.prototype.clear = function() {
  this._keys.length   = 0
  this._values.length = 0
}

/**
 * Exports
 */

module.exports = EzMap
