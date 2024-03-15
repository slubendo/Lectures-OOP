const express = require('express')
let app = express()
const session = require('express-session')
const FileStore = require('session-file-store')(session);
 
const fileStoreOptions = {};

app.use(express.static('public'))
// Files are files from computer with no modifications

app.set('view engine', 'ejs')
// Use the session middleware
app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
}))

// Access the session as req.session
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

app.listen(8000, () => {
    console.log('server is online')
})