function defineHTMLRoutes(app, superHeroList) {
    app.get('/', function (req, res) {
        res.render('index', {});
    });
    app.get('/list', function (req, res) {
        res.render('list', {
            superHeroList: superHeroList
        });
    });
}

module.exports = defineHTMLRoutes;