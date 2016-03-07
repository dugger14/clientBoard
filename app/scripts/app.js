var activitiesApp  =  angular.module('activitiesApp', ["firebase"]);

activitiesApp.controller("activitiesController", function($scope, $firebaseArray) {
  var ref = new Firebase("https://torrid-torch-930814.firebaseio.com/");
  
  // create a synchronized array
  $scope.activities = $firebaseArray(ref);
  
    // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addA = function() {
    $scope.activities.$add({
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
      $scope.partner = '';
      $scope.contact = '';
      $scope.notes = '';
      $scope.type = '';
  };

  
});

activitiesApp.controller('contactsLookupController', function($scope, $http){
    $http.get('data/contacts.json').success(function (response){
        $scope.contactList = response;
    });
});
    
activitiesApp.controller('contactsController', function($scope, $http){
    $http.get('data/contacts.json').success(function (response){
        $scope.contacts = response;
    });
});
