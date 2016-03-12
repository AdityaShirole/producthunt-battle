var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';

var param = "?client_id=" + id + "&client_secret=" + sec;

var config = {
  headers: {'Authorization': 'Bearer a0787473c36b584b46e7e332a440a98d9021677b1e1d0e171ebd29842f5d9043 '}
};

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getHunterInfo(username) {
  return axios.get('https://api.producthunt.com/v1/users/' + username, config)
}


function getRepos(username) {
  //fetch usernames repos
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '?per_page=100');
}

function getTotalStars(repos) {
  //calc total stars
  return repos.data.reduce( function(prev, current) {
    console.log("stargazers_count : ", current.stargazers_count);
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
  //getRepos
  //getTotalStars
  //return object with that data
  return getRepos(player.login)
    .then(getTotalStars)
    .then( function(totalStars) {
      return {
        followers : player.followers,
        totalStars : totalStars
      }
    });
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,    players[1].followers * 3 + players[1].totalStars
  ]
}


var helpers = {
  getPlayersInfo: function(players) {
    //fetch data from github
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function (user){
        return user.data;
      });
    }).catch(function(error) {
      console.warn("Error in playersInfo", error);
    });

  },

  battle: function(players){
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn("Error in getPlayersInfo ",err);
      });
  },

  getHuntersInfo: function (players) {
    //fetch data from github
    return axios.all(players.map(function(username) {
      return getHunterInfo(username)
    })).then(function(info) {
      return info.map(function (hunter){
        console.log("CHECK",hunter);
        return hunter.data.user;
      });
    }).catch(function(error) {
      console.warn("Error in playersInfo", error);
    });


  }

};

module.exports = helpers;
