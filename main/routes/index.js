exports.mainPage = function ( req, res){
	res.render('mainPage', {
		title: "Odyssey'15"
	});
}
exports.lifestyle = function ( req, res){
	res.render('lifestyle', {
		title: "Odyssey'15 | Lifestyle"
	});
}
exports.finearts = function ( req, res){
	res.render('finearts', {
		title:"Odyssey'15 | Fine Arts"
	});
}
exports.theatre = function ( req, res){
	res.render('theatre', {
		title: "Odyssey'15 | Theatre"
	});
}
exports.dance = function ( req, res){
	res.render('dance', {
		title: "Odyssey'15 | Dance"
	});
}

exports.quizzing = function ( req, res){
	res.render('quizzing', {
		title: "Odyssey'15 | Quizzes"
	});
}

exports.literary = function ( req, res){
	res.render('literary', {
		title: "Odyssey'15 | Literary"
	});
}

exports.digitalarts = function ( req, res){
	res.render('digitalarts', {
		title: "Odyssey'15 | Digital Arts"
	});
}

exports.gaming = function ( req, res){
	res.render('gaming', {
		title: "Odyssey'15 | Gaming"
	});
}

exports.music = function ( req, res){
	res.render('music', {
		title: "Odyssey'15 | Music"
	});
}

exports.treasurehunt = function ( req, res){
	res.render('treasurehunt', {
		title: "Odyssey'15 | Tresure Hunt"
	});
}

exports.chess = function ( req, res){
	res.render('chess', {
		title: "Odyssey'15 | Chess"
	});
}
exports.team = function ( req, res){
	res.render('team', {
		title: "Odyssey'15 | Organising Team"
	});
}
exports.dt = function ( req, res){
	res.render('dt', {
		title: "Odyssey'15 | WebDev Team"
	});
}

exports.informals = function ( req, res){
	res.render('informals', {
		title: "Odyssey'15 | Informal Events"
	});
}


exports.reach_us = function ( req, res){
	res.render('reachUs', {
		title: "Odyssey'15 | Directions"
	});
}

exports.schedule = function ( req, res){
	res.render('schedule', {
		title: "Odyssey'15 | Schedule"
	});
}
