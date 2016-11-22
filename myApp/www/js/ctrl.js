/**
 * Created by Galust on 11/17/2016.
 */

myapp.controller('starterCtrl',['$scope','$location','$ionicPopover','youtubeApi','$sce', function ($scope, $location,$ionicPopover,youtubeApi,$sce) {
  $scope.popolarByview = [];
  $scope.videos = [
    {'title':'Tv Series'},
    {'title':'Entertainment'},
    {'title':'News'},
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

  youtubeApi.getPlaylist( $scope.youtubeParams ).then(function(response){
      angular.forEach(response.data.items, function(child){
        $scope.mostPopularvidoes =$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+child.id.videoId);
      });
  });

  youtubeApi.getPlaylist( $scope.youtubeParams1 ).then(function(response){
    angular.forEach(response.data.items, function(child){
     $scope.popolarByview.push(child.snippet);
      console.log($scope.popolarByview);
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
    console.log(userLogin);
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
