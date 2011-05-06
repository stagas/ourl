// MIT licenced

var url = require('url')

var Url = function(href, parseQueryString) {
  if (!(this instanceof Url)) return new Url(href)
  return this.parse(href, parseQueryString)
}

Url.prototype.parse = function(href, parseQueryString) {
  for (var k in this) {
    if (this.hasOwnProperty(k))
      delete this[k]
  }
  this.url = url.parse(href, parseQueryString)
  this.url.path = this.url.pathname
    + ('undefined' !== typeof this.url.search && this.url.search || '')
    + ('undefined' !== typeof this.url.hash && this.url.hash || '')
  for (var k in this.url) {
    if (this.url.hasOwnProperty(k))
      this[k] = this.url[k]
  }
  return this
}

Url.prototype.format = function() {
  return url.format(this)
}

Url.prototype.resolve = function(to) {
  return url.resolve(this, to || this)
}

Url.prototype.toString = function() {
  return url.format(this)
}

exports.Url = Url
module.exports = Url
