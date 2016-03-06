var activitiesApp = angular.module('activitiesApp', []);

/*activitiesApp.controller('activitiesController', function($scope, $http) {
    $http.get("data/activities.json")
    .then(function(response) {
        $scope.activities = response.data;
    });
}
*/
activitiesApp.controller('activitiesController', function($scope) {
  
$scope.activities=  [{
  id: "1",
  contact: "James Martin",
  partner: "Dave Timmons",
  notes: "Went to the Knicks game and discussed project alpha.",
  date: "Today",
  type: "games"
},

{
  id: "2",
  contact: "Amy T. Johnson",
  partner: "Tom B. Burrows",
  notes: "Left message follow-up to weekly status.",
  date: "Yesterday",
  type: "message"
},

{
  id: "3",
  contact: "Clive Barry",
  partner: "Janet S. Harrison",
  notes: "Client lunch with mergers team.",
  date: "March 5, 2016",
  type: "store"
}];
  
  $scope.addActivity = function() {
    $scope.contacts.push($scope.contact);
    $scope.contact = '';
  };
  
  $scope.removeName = function(name) {
    var i = $scope.contact.indexOf(contact);
    $scope.contacts.splice(i, 1);
  };
  
}); 
