exports.action = function(data, callback){

	let client = setClient(data);

	info("BetaSeriesPlaning from:", data.client, "To:", client);
	betaseries (data, client);
	callback();
}

function betaseries (data, client) {
   
	var cle_api = '86c73c03bxxx';
	var token = '7c1431ca6xxx';
	fetch('https://api.betaseries.com/planning/member?v=3.0&key=' + cle_api + '&token=' + token, {
        'headers': {
        'X-BetaSeries-Version': '3.0',
        'X-BetaSeries-Key': "86c73c03bxxx"
}
    })
    .then(response => response.json())
    .then(json => {
	Avatar.speak("Un instant s'il vous plait", data.client, function(){
    Avatar.speak("la semaine derniére" , data.client, function(){
	Avatar.speak(json.episodes[0].show.title + ":saison." + json.episodes[0].season + ":épisode." + json.episodes[0].episode + ":le." + dateFormater(json.episodes[0].date) , data.client, function(){
    Avatar.speak(json.episodes[1].show.title + ":saison." + json.episodes[1].season + ":épisode." + json.episodes[1].episode + ":le." + dateFormater(json.episodes[1].date) , data.client, function(){
    Avatar.speak(json.episodes[2].show.title + ":saison." + json.episodes[2].season + ":épisode." + json.episodes[2].episode + ":le." + dateFormater(json.episodes[2].date) , data.client, function(){
    Avatar.speak(json.episodes[3].show.title + ":saison." + json.episodes[3].season + ":épisode." + json.episodes[3].episode + ":le." + dateFormater(json.episodes[3].date) , data.client, function(){
    Avatar.speak("cette semaine" , data.client, function(){
    Avatar.speak(json.episodes[4].show.title + ":saison." + json.episodes[4].season + ":épisode." + json.episodes[4].episode + ":le." + dateFormater(json.episodes[4].date) , data.client, function(){
    Avatar.speak("la semaine prochaine" , data.client, function(){
    Avatar.speak(json.episodes[5].show.title + ":saison." + json.episodes[5].season + ":épisode." + json.episodes[5].episode + ":le." + dateFormater(json.episodes[5].date) , data.client, function(){
    Avatar.speak(json.episodes[6].show.title + ":saison." + json.episodes[6].season + ":épisode." + json.episodes[6].episode + ":le." + dateFormater(json.episodes[6].date) , data.client, function(){   
	Avatar.Speech.end(data.client);
	});
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
}

    let dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
};

function setClient(data){
    var client = data.client;
    if (data.action.room)
    client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
    if (data.action.setRoom)
    client = data.action.setRoom;
    return client;
}
