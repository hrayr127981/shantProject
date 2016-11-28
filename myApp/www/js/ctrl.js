/**
 * Created by Galust on 11/17/2016.
 */

myapp.controller('starterCtrl',['$scope','$location','$ionicPopover','youtubeApi','$sce','$stateParams','$http', function ($scope, $location,$ionicPopover,youtubeApi,$sce,$stateParams,$http) {
  $scope.popolarByview = [];
  $scope.relevance = [];
  $scope.playlists = [];
  $scope.playListItems = [];
  $scope.army = [];
  $scope.health = [];
  var params = $stateParams.id;
  $scope.currVideo =$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+params);
  $scope.getTitle = function(title){

  }
  $scope.videos = [
    {
      'title':'Tv Series',
       'url': '/main/serials'
    },
    {
      'title':'Entertainment',
      'url': '/main/entertainment'
    },
    {
      'title':'News',
      'url': '/main/news'
    },
    {'title':'Shows'}
  ];

  youtubeApi.getPlaylistItem(youtubeApi.getArmy ).then(function(response){
    angular.forEach(response.data.items, function(child){
      $scope.army.push(child.snippet);
    });
  });

  youtubeApi.getPlaylistItem(youtubeApi.health).then(function(response){
    angular.forEach(response.data.items, function(child){
      $scope.health.push(child.snippet);
    });
  });


  youtubeApi.getPlaylist(youtubeApi.config.mainVideo ).then(function(response){
      angular.forEach(response.data.items, function(child){
        $scope.mostPopularvidoes =$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+child.id.videoId);
      });
  });
  youtubeApi.getPlaylist( youtubeApi.config.orderByType ).then(function(response){
    angular.forEach(response.data.items, function(child){
     $scope.popolarByview.push(child.snippet);
    });
  });
  youtubeApi.getPlaylist(youtubeApi.config.orderByRelevance ).then(function(response){
    angular.forEach(response.data.items, function(child){
       $scope.relevance.push(child);
    });
  });
  youtubeApi.getPlaylist(youtubeApi.config.orderByDate ).then(function(response){
    var latestPlaylists = response.data.items;


    angular.forEach(latestPlaylists, function(value,key){

      var playlistParams ={

        key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
        maxResults: '15',
        part: 'snippet',
        playlistId: latestPlaylists[key].id.playlistId,
      };
      youtubeApi.getPlaylistItem(playlistParams).then(function(response){
          $scope.playListItems.push({
          items: response.data.items,
          titles: latestPlaylists[key].snippet.title
        });
      });
    });
  });
  $scope.go = function(path) {
    $location.path(path);
  };
  $scope.auth = [
    {
      "email":"1",
      "password":"1"
    }
  ];
  /* sign in*/


  $scope.log = false;
  $scope.log1 = false;
  $scope.login = function(userLogin,userPassword){
    if(userLogin && userPassword){
      var params =  {phone:userLogin, password:userPassword};
      var url = "http://api.taxi.studio-one.am/v2/passenger-auth/";
        $http.post(url, params).success(function(response) {
        $scope.go('/main');
      });

      }

  };

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

$scope.materials = [
  {
    'title':'news',
     'url':'/main/tv'
  },
  {'title':'humor'},
  {'title':'entertainment'}
];
  $scope.flag = false;
  $scope.flagchange = function ()
  {
    $scope.flag = true;
  };

  $scope.flagchange1 = function ()
  {
    $scope.flag = false;
  };
}]);
