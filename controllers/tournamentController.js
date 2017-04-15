var Tournament = require('../models/Tournament');

	exports.getTournament = function(req, res) {
        Tournament.find(function(err, tournaments) {
            if (err)
                res.send(err);

            res.json(tournaments);
        });
    };

   
    exports.createTournament = function(req, res) {
        
        var tournament = new Tournament();      
       		tournament.name = req.body.name;
            tournament.teams = req.body.teams;
            tournament.debaters = req.body.debaters;
     		tournament.level = req.body.level;
            tournament.date = req.body.date;
 

        // save the tournament and check for errors
        tournament.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    exports.getTournamentByID = function(req, res) {
        tournament.findById(req.params.tournament_id, function(err, tournament) {
            if (err)
                res.send(err);
            res.json(tournament);
        })
    };

     exports.updateTournamentByID = function(req, res) {

        // use our tournament model to find the tournament we want
        Tournament.findById(req.params.tournament_id, function(err, tournament) {

            if (err)
                res.send(err);

               var tournament = new Tournament();      // create a new instance of the Bear model
            tournament.name = req.body.name;
            tournament.teams = req.body.teams;
            tournament.debaters = req.body.debaters;
            tournament.level = req.body.level;
            tournament.date = req.body.date;

            // save the tournament
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