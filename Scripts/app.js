var app = angular.module('app', ['ngRoute']);
app.controller('peopleCtrl', ['$scope','$http', function ($scope,$http) {

    $scope.Title = "Angular Ajax";
    $scope.Menu = "Options";

    $scope.Person = {};
    $scope.People = {};

    $.get('/API/getPeople', null, function (data) {
        $("#names").html(null);
        $scope.People = data;
        /*
        ** inside the #names element, place this :
        ** <a href={{'/Pages/Details/'+x.ID}} ng-repeat="x in People">{{x.Name}}</a>
        ** The remove the for(..) loop below, ;-)!!
        */
        
        for (var i = 0; i < data.length; i++) {
            
            $("#names").append('<a href="/Pages/Details/' + data[i].ID + '">' + data[i].Name + '</a> <br />');
        }
    });

    $http.get('/API/getPeople').then(function (data) {
        $scope.People = data;

        
        
    });

    $scope.Save = function () {
        $http.post('/API/addPerson', $scope.Person).then(function () {
            alert($scope.Person.Name + ' Saved to database!');
            $http.get('/API/getPeople').then(function (data) {
                $scope.People = data;
                
            });
        })
        
    }

}]);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/view', {
        templateUrl: '/Pages/People',
        controller: 'peopleCtrl'
    })
    .when('/add', {
        templateUrl: '/Pages/AddPerson',
        controller: 'peopleCtrl'
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
}]);
