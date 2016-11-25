/**
 * Created by Galust on 11/21/2016.
 */
'use_strict'
myapp.factory('youtubeApi', ['$http',function($http){
  var youtubeApi = {};
  youtubeApi.getPlaylist = function(params){
   return $http.get('https://www.googleapis.com/youtube/v3/search', {params:params})
  };
  youtubeApi.getPlaylistItem = function(params){
    return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:params})
  };
  return youtubeApi;
}]);



