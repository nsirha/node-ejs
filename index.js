// require the needed dependencies
var express = require('express')
var ejsLayouts = require('express-ejs-layouts')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

// tell node where the css files are located
app.use(express.static(__dirname + '/public'))

// create the route for '/' and render the 'index.ejs' file to the browser
app.get('/', function(req, res) {
    var title = "My Website";
    var pageTitle = "This is the page title";
    var cars = [
        { name: 'Mercedes', rank: 1 },
        { name: 'Ferrari', rank: 2  },
        { name: 'Red Bull', rank: 3  }
    ]
    res.render('index', {
        title: title,
        pageTitle: pageTitle,
        cars: cars
    })
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

// tell the application to listen on port 3000
app.listen(3000)