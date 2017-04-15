var Debater = require('../models/debater');

	exports.getDebater = function(req, res) {
        Debater.find(function(err, debaters) {
            if (err)
                res.send(err);

            res.json(debaters);
        });
    };

    // create a bear (accessed at POST http://localhost:8080/api/debaters)
    exports.createDebater = function(req, res) {
        
        var debater = new Debater();      // create a new instance of the Bear model
       		debater.name = req.body.name;
     		debater.points = req.body.points;
            debater.active = true;  // set the bears name (comes from the request)

        // save the bear and check for errors
        debater.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getDebaterByID = function(req, res) {
        Debater.findById(req.params.debater_id, function(err, debater) {
            if (err)
                res.send(err);
            res.json(debater);
        })
    };

     exports.updateDebaterByID = function(req, res) {

        // use our bear model to find the bear we want
        Debater.findById(req.params.debater_id, function(err, debater) {

            if (err)
                res.send(err);

            debater.name = req.body.name;
     		debater.points = req.body.points;
            debater.active = req.body.active;
    

            // save the bear
            debater.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'debater updated!' });

            });

        });
    };
       exports.deleteDebaterByID = function(req, res) {
        Debater.remove({
            _id: req.params.debater_id
        }, function(err, debater) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };

        exports.calculatePointsForDebaterByID = function(req, res) {
         Debater.findById(req.params.debater_id, function(err, debater) {
            if (err)
                res.send(err);

            for (debater in Debater.results) {
                text += person[x];
            }
            res.json(debater);
        })
    };