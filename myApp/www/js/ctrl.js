/**
 * Created by Galust on 11/17/2016.
 */

myapp.controller('starterCtrl',['$scope','$location','$ionicPopover','youtubeApi','$sce', function ($scope, $location,$ionicPopover,youtubeApi,$sce) {
  $scope.popolarByview = [];
  $scope.relevance = [];
  $scope.playlists = [];
  $scope.playListItems = [];
  $scope.getTitle = function(title){
    console.log("title");
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
  $scope.youtubeParams = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '1',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'date',
    type : 'video'
  };


  $scope.youtubeParams1 = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '15',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'viewCount',
    type : 'video'
  };

  $scope.youtubeParams2 = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '15',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'relevance',
    type : 'video'
  };

  $scope.youtubeParams3 = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '4',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'date',
    type : 'playlist'
  };

  youtubeApi.getPlaylist( $scope.youtubeParams ).then(function(response){
      angular.forEach(response.data.items, function(child){
        $scope.mostPopularvidoes =$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+child.id.videoId);
      });
  });

  youtubeApi.getPlaylist( $scope.youtubeParams1 ).then(function(response){
    angular.forEach(response.data.items, function(child){
     $scope.popolarByview.push(child.snippet);
    });
  });

  youtubeApi.getPlaylist( $scope.youtubeParams2 ).then(function(response){
    angular.forEach(response.data.items, function(child){
       $scope.relevance.push(child);
    });
  });


  youtubeApi.getPlaylist( $scope.youtubeParams3 ).then(function(response){

    var latestPlaylists = response.data.items;


    angular.forEach(latestPlaylists, function(value,key){

      $scope.playlistParams ={

        key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
        maxResults: '15',
        part: 'snippet',
        playlistId: latestPlaylists[key].id.playlistId,
      };
      youtubeApi.getPlaylistItem($scope.playlistParams).then(function(response){

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
  $scope.log = false;
  $scope.log1 = false;
  $scope.login = function(userLogin,userPassword){
    if(userLogin && userPassword){
      if(userLogin === $scope.auth[0].email &&  userPassword === $scope.auth[0].password)
      {
        $scope.go('/main');
      }
      else
      {
           $scope.log1 = true;
           $scope.log = false
      }
    }
    else
    {
         $scope.log = true;
         $scope.log1 = false;
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
