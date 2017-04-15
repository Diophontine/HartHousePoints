var express = require('express');
var router = express.Router();

// Require controller modules
var debate_controller = require('../controllers/debaterController');
var tournament_controller = require('../controllers/tournamentController');
var result_controller = require('../controllers/resultController');
//var debate_instance_controller = require('../controllers/debateinstanceController');

/// debater ROUTES ///


/* GET request for creating a debate. NOTE This must come before routes that display debate (uses id) */

router.get('/debater/', debate_controller.getDebater);

/* POST request for creating debate. */
router.post('/debater/', debate_controller.createDebater);

/* GET request to delete debate. */
router.delete('/debater/:debater_id', debate_controller.deleteDebaterByID);

// POST request to delete debate
router.put('/debater/:debater_id', debate_controller.updateDebaterByID);

/* GET request to update debate. */
router.get('/debater/:debater_id', debate_controller.getDebaterByID);


// tournament


router.get('/tournament/', tournament_controller.getTournament);

/* POST request for creating tournament. */
router.post('/tournament/', tournament_controller.createTournament);

/* GET request to delete tournament. */
router.delete('/tournament/:tournament_id', tournament_controller.deleteTournamentByID);

// POST request to delete tournament
router.put('/tournament/:tournament_id', tournament_controller.updateTournamentByID);

/* GET request to update tournament. */
router.get('/tournament/:tournament_id', tournament_controller.getTournamentByID);

// for results

router.get('/result/', result_controller.getResult);

/* POST request for creating tournament. */
router.post('/result/', result_controller.createResult);

/* GET request to delete tournament. */
router.delete('/result/:result_id', result_controller.deleteResultByID);

// POST request to delete tournament
router.put('/result/:result_id', result_controller.updateResultByID);

/* GET request to update tournament. */
router.get('/result/:result_id', result_controller.getResultByID);



module.exports = router;