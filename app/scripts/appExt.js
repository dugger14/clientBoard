var activitiesApp  =  angular.module('activitiesApp', []);

activitiesApp.controller('activitiesController', function($scope, $http){
    $http.get('data/activities.json').success(function (response){
        $scope.activities = response;
    });
});

activitiesApp.controller('contactsController', function($scope, $http){
    $http.get('data/contacts.json').success(function (response){
        $scope.contacts = response;
    });
});