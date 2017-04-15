var Debater = require('../models/debater');

	.get(function(req, res) {
        Debater.find(function(err, debaters) {
            if (err)
                res.send(err);

            res.json(debaters);
        });
    })

    // create a bear (accessed at POST http://localhost:8080/api/debaters)
    .post(function(req, res) {
        
        var debater = new Debater();      // create a new instance of the Bear model
       		debater.name = req.body.name;
     		debater.points = req.body.points;  // set the bears name (comes from the request)

        // save the bear and check for errors
        debater.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    });
// get all the bears (accessed at GET http://localhost:8080/api/bearss)
 	


 

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/debaters/:debater_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Debater.findById(req.params.debater_id, function(err, debater) {
            if (err)
                res.send(err);
            res.json(debater);
        })
    })

        .put(function(req, res) {

        // use our bear model to find the bear we want
        Debater.findById(req.params.debater_id, function(err, debater) {

            if (err)
                res.send(err);

            debater.name = req.body.name;
     		debater.points = req.body.points;
    

            // save the bear
            debater.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'debater updated!' });

            });

        });
    })
        .delete(function(req, res) {
        Debater.remove({
            _id: req.params.bear_id
        }, function(err, debater) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


module.exports = router;