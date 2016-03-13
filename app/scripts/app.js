var activitiesApp  =  angular.module('activitiesApp', ["firebase"]);

activitiesApp.controller("activitiesController", function($scope, $firebaseArray) {
/*  var ref = new Firebase("https://torrid-torch-9308.firebaseio.com/");
*/  
  var ref = new Firebase("https://torrid-torch-930814.firebaseio.com/");
  
  // create a synchronized array
  $scope.activities = $firebaseArray(ref);

    // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addA = function() {
    $scope.activities.$add({
        contact : $scope.newActivity.contactName,
        partner : $scope.newActivity.partner,
        notes : $scope.newActivity.notes,
        date : $scope.newActivity.date.toISOString(),
        type : $scope.newActivity.type
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
