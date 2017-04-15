exports.tournamentLevels = {
	speaker:[40,24,16,8],
	team:[50,30,20,10],
	judge:[15,9,6,3],
	judgeBreak:[45,27,81,9]
}

exports.speakerFormula = funtion speakerFormula(level,speakerPlace,teamPlace,speakerSize, teamSize){
var M = tournamentLevels[level];
var speakerPoints = M - [M*(speakerPlace - 1)/speakerSize];
var teamPoints =  M­ - [2*M*(teamPlace - 1)/teamSize];

if ( teamPoints + speakerPoints) < 0
	return 0;
else
	return teamPoints + speakerPoints;

};



