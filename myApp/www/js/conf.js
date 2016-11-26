/**
 * Created by Galust on 11/17/2016.
 */
myapp.config(function($stateProvider){
  $stateProvider.state('home',{
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

  $stateProvider.state('Serials',{
    url:'/main/serials',
    templateUrl:"templates/Serials.html"
  });



});
