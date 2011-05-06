ourl
====
`url` module exported as a constructor

Installation
------------

    npm install ourl

Usage
-----

    var Url = require('ourl')
    
    var joyent = new Url('https://github.com/joyent/node')

This is how the object looks like:

    { url:
       { protocol: 'https:',
         slashes: true,
         host: 'github.com',
         hostname: 'github.com',
         search: '',
         query: {},
         pathname: '/joyent/node',
         href: 'https://github.com/joyent/node',
         path: '/joyent/node' },
      protocol: 'https:',
      slashes: true,
      host: 'github.com',
      hostname: 'github.com',
      search: '',
      query: {},
      pathname: '/joyent/node',
      href: 'https://github.com/joyent/node',
      path: '/joyent/node' }

`url` Methods are available as well:

    joyent.format()       // https://github.com/joyent/node
    
    joyent.resolve('/')   // https://github.com/

    // replaces the object internal values with the new url
    joyent.parse('http://search.twitter.com/search?q=node+node.js')

And there's also a .toString() method for convenience:

    console.log('Joyent url: ' + joyent)
    // Joyent url: https://github.com/joyent/node

Also, you can use it directly with `http.request/get`:

    http.get(joyent, function(res) { ... }) 
    http.get(new Url('http://search.twitter.com/search?q=node+node.js'), function(res) { ... })
    
