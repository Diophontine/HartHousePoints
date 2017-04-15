var Result = require('../models/Result');

	exports.getResult = function(req, res) {
        Result.find(function(err, results) {
            if (err)
                res.send(err);

            res.json(results);
        });
    };

    // create a bear (accessed at POST http://localhost:8080/api/debaters)
    exports.createResult = function(req, res) {
        
        var result = new Result();      // create a new instance of the Bear model
       		result._Tournament = req.body.tournament_id;
            result._Debater = req.body.debater_id;
            result.debater_rank = req.body.debater_rank;
     		result.team = req.body.team_rank;
            result.level = req.body.level;
      // set the bears name (comes from the request)

        // save the bear and check for errors
        tournament.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getResultByID = function(req, res) {
        result.findById(req.params.result_id, function(err, result) {
            if (err)
                res.send(err);
            res.json(result);
        })
    };

     exports.updateResultByID = function(req, res) {

        // use our bear model to find the bear we want
        Result.findById(req.params.result_id, function(err, result) {

            if (err)
                res.send(err);

              var result = new Result();      // create a new instance of the Bear model
            result._Tournament = req.body.tournament_id;
            result._Debater = req.body.debater_id;
            result.debater_rank = req.body.debater_rank;
            result.team = req.body.team_rank;
            result.level = req.body.level;
    

            // save the bear
            result.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'result updated!' });

            });

        });
    };
       exports.deleteResultByID = function(req, res) {
        Result.remove({
            _id: req.params.result_id
        }, function(err, result) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };