
'use_strict'
myapp.factory('youtubeApi', ['$http',function($http){
  var youtubeApi = {};
  youtubeApi.getPlaylist = function(params){
   return $http.get('https://www.googleapis.com/youtube/v3/search', {params:params})
  };
  youtubeApi.getPlaylistItem = function(params){
    return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:params})
  };
  youtubeApi.config = [];
  youtubeApi.config.mainVideo = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '1',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'date',
    type : 'video'
  };
  youtubeApi.config.orderByType = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '15',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'viewCount',
    type : 'video'
  };

  youtubeApi.config.orderByRelevance = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '15',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'relevance',
    type : 'video'
  };

  youtubeApi.config.orderByDate = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '4',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'date',
    type : 'playlist'
  };

  youtubeApi.getArmy = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '10',
    part: 'snippet',
    playlistId: 'PLIdKbEnBj_B9E4JJyb6VfomxPQghCuZuM',
    order:'viewCount',
  };

  youtubeApi.health = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '10',
    part: 'snippet',
    playlistId: 'PLIdKbEnBj_B-u5UrBL-I8JBzrJW3vuDZ2',
    order:'viewCount',
  };
  return youtubeApi;
}]);



