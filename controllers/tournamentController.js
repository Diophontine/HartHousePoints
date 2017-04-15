var Tournament = require('../models/Tournament');

	exports.getTournament = function(req, res) {
        Tournament.find(function(err, tournaments) {
            if (err)
                res.send(err);

            res.json(tournaments);
        });
    };

    // create a bear (accessed at POST http://localhost:8080/api/debaters)
    exports.createTournament = function(req, res) {
        
        var tournament = new Tournament();      // create a new instance of the Bear model
       		tournament.name = req.body.name;
            tournament.teams = req.body.teams;
            tournament.debaters = req.body.debaters;
     		tournament.level = req.body.level;
            tournament.date = req.body.date;
      // set the bears name (comes from the request)

        // save the bear and check for errors
        tournament.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getTournamentByID = function(req, res) {
        tournament.findById(req.params.tournament_id, function(err, tournament) {
            if (err)
                res.send(err);
            res.json(tournament);
        })
    };

     exports.updateTournamentByID = function(req, res) {

        // use our bear model to find the bear we want
        Tournament.findById(req.params.tournament_id, function(err, tournament) {

            if (err)
                res.send(err);

               var tournament = new Tournament();      // create a new instance of the Bear model
            tournament.name = req.body.name;
            tournament.teams = req.body.teams;
            tournament.debaters = req.body.debaters;
            tournament.level = req.body.level;
            tournament.date = req.body.date;

            // save the bear
            tournament.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'debater updated!' });

            });

        });
    };
       exports.deleteTournamentByID = function(req, res) {
        Tournament.remove({
            _id: req.params.tournament_id
        }, function(err, tournament) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };