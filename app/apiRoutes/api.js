function defineApiRoutes(app, superHeroList) {
    app.get('/api/list', function (req, res) {
        res.json(superHeroList);
    });
}

module.exports = defineApiRoutes;