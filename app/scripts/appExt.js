var activitiesApp  =  angular.module('activitiesApp', []);

activitiesApp.controller('activitiesController', function($scope, $http){
    $http.get('data/activities.json').success(function (response){
        $scope.activities = response;
   
      $scope.addA = function () {
      $scope.activities.splice(0,0,{
      //$scope.activities.push({
        
        contact : $scope.contact,
        partner : $scope.partner,
        notes : $scope.notes,
        date : $scope.date,
        type : $scope.type
      });
      $("#formContainer").fadeOut();
      $("#form1").fadeOut();
      $("#mask").css("background-color","");
      $("#mask").css("z-index","0");
      window.scrollTo(0,0);
      $scope.contact = '';
      $scope.partner = '';
      $scope.notes = '';
      $scope.date = '';
      $scope.type = '';
    };
    
      $scope.deleteA = function(id) {
        var result = confirm("Are you sure?");
        if (result===true) {
        $scope.activities.splice(id, 1);
        }
      };
   
  });
    
  console.log($scope);
  
});

activitiesApp.controller('contactsController', function($scope, $http){
    $http.get('data/contacts.json').success(function (response){
        $scope.contacts = response;
    });
});