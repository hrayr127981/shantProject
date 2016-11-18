/**
 * Created by Galust on 11/17/2016.
 */

myapp.controller('starterCtrl', function ($scope, $location,$ionicPopover,$http) {
  $scope.videos = [];
  $scope.youtubeParams = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '5',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
  }

  $http.get('https://www.googleapis.com/youtube/v3/playlists', {params:$scope.youtubeParams}).success(function(response){
    angular.forEach(response.items, function(child){
      $scope.videos.push(child);
      console.log($scope.videos);
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
});
