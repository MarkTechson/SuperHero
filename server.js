var app = require('express')();
var exphbs = require('express-handlebars');
var htmlRoutes = require('./app/htmlRoutes/html');
var apiRoutes = require('./app/apiRoutes/api');

var PORT = process.env.PORT || 3000; // <--------------------

// setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// define some data
var superHeroList = [
    {
        name: 'Captain Fantastic',
        power: 'Super Pants',
        rank: 8
    },
    {
        name: 'Cucumber Sorter',
        power: 'Identify Cucumbers in a single glance',
        rank: 4
    },
    {
        name: 'Team Player',
        power: 'Make sure Linda from HR is Happy',
        rank: 6
    }
];

// setup API routes
// setup some HTML routes
htmlRoutes(app, superHeroList);
apiRoutes(app, superHeroList);
// start the server
app.listen(PORT, function  (err){
    console.log(err);
    console.log(`SuperHero app listening on ${PORT}`);
})