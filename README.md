# BetaSeriesPlaning

- AVATAR vous donne le planing de vos series preférer sur le site bétaseries
- obligatoire : créer un compte sur le site : https://www.betaseries.com/
- obligatoire ajouter ou créer une bibliotheque vos series préferer 
- Documentation de l'API : https://www.betaseries.com/api/docs
- ensuite demander des clés ici : https://www.betaseries.com/api/
- reseigne vos clés sur le fichier js
- 
var cle_api = '86c73c03bxxx';
var token = '7c1431ca6xxx';
	fetch('https://api.betaseries.com/planning/member?v=3.0&key=' + cle_api + '&token=' + token, {
        'headers': {
        'X-BetaSeries-Version': '3.0',
        'X-BetaSeries-Key': "86c73c03bxxx"
        
- les regles sont : quel sont les series , quel sont les épisodes
