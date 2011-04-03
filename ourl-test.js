var Url = require('./ourl.js')
  , http = require('x-core')('http')
  , assert = require('assert')

var foo_href = 'http://foobar.org/test/foo?translate=el&page=1#hash'
  , bar_href = 'https://scu.org/ba/divi.ng'
  , test1_href = '/'
  , test2_href = 'http://search.twitter.com/search?q=node+node.js'

var foo = new Url(foo_href, true)
var bar = new Url(bar_href)
var test1 = new Url(test1_href)

assert.equal(foo.href, foo_href)
assert.deepEqual(foo.query, { translate: 'el', page: '1' })
assert.equal(foo.resolve('/'), 'http://foobar.org/')
assert.equal(foo.format(), foo_href)
assert.equal(bar.href, bar_href)
assert.equal(test1.href, test1_href)
assert.equal(foo.resolve(test1), 'http://foobar.org/')
assert.equal(foo.hash, '#hash')
foo.parse(test2_href)
assert.equal(foo.hash, undefined)
assert.equal(foo.host, 'search.twitter.com')

http.get(foo, function(res) {
  res.on('line', function(line) {
    if (~line.indexOf('<title')) {
      assert.equal(line.trim(), '<title>node node.js - Twitter Search</title>')
    }
  })
})
