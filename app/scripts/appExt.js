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
      $("#formContainer").slideUp();
      $("#form1").slideUp();
      $scope.contact = '';
      $scope.partner = '';
      $scope.notes = '';
      $scope.date = '';
      $scope.type = '';
    };
   
  });
    
  console.log($scope);
  
});

activitiesApp.controller('contactsController', function($scope, $http){
    $http.get('data/contacts.json').success(function (response){
        $scope.contacts = response;
    });
});