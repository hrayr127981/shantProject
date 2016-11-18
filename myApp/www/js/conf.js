/**
 * Created by Galust on 11/17/2016.
 */
myapp.config(function($stateProvider){
  $stateProvider.state('Home',{
    url:'/home',
    templateUrl:"templates/Home.html"
  });

  $stateProvider.state('Login',{
    url:'/home/login',
    templateUrl:"templates/login.html"
  });

  $stateProvider.state('main',{
    url:'/main',
    templateUrl:"templates/main.html"
  });

  $stateProvider.state('tv',{
    url:'/main/tv',
    templateUrl:"templates/tv.html"
  });

});
