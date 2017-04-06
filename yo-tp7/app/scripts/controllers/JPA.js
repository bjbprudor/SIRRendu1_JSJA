var jpaApp = angular.module('JPA', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
jpaApp.constant('JSJA', 'http://localhost:8080/JSJA-1.0');

jpaApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

jpaApp.controller("PersonCtrl", function($scope, $log,$http,$resource)
{

    $http({
        method: 'GET',
        url: 'http://localhost:8080/JSJA-1.0/ListPerson'
    }).then(function successCallback(response) {
        $scope.Lists= response.data;
        $log.info($scope.Lists);
    }, function errorCallback(response) {

    });

    $scope.prenom = "";
    $scope.nom = "";

    $scope.addClick = function()
    {
        var name = $scope.nom;
        var firstname = $scope.prenom;

        $log.info($scope.prenom);
        $log.info($scope.nom);

        $http({
            method: 'POST',
            url: 'http://localhost:8080/JSJA-1.0/AddPerson?name=' + name + '&firstname=' + firstname
        }).then(function successCallback(response) 
        {
            $http({
                method: 'GET',
                url: 'http://localhost:8080/JSJA-1.0/ListPerson'
            }).then(function successCallback(response) {
                $scope.Lists= response.data;
                $log.info($scope.Lists);
            });
        });
    }

    $scope.listClick = function()
    {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/JSJA-1.0/ListPerson'
        }).then(function successCallback(response) 
        {
            $scope.Lists= response.data;
            $log.info($scope.Lists);
        });
    }

});


jpaApp.controller("ResiCt", function($scope, $log,$http,$resource)
{

    $http({
        method: 'GET',
        url: 'http://localhost:8080/JSJA-1.0/ListResidence'
    }).then(function successCallback(response) {
        $scope.Lists= response.data;
        $log.info($scope.Lists);
    }, function errorCallback(response) {

    });

    $scope.taille = 0;
    $scope.nbpiece = 0;

    $scope.addClick = function()
    {
        var taille = $scope.taille;
        var nbpiece = $scope.nbpiece;

        $log.info($scope.taille);
        $log.info($scope.nbpiece);

        $http({
            method: 'POST',
            url: 'http://localhost:8080/JSJA-1.0/AddResidence?taille=' + taille + '&nbpiece=' + nbpiece
        }).then(function successCallback(response) 
        {
            $http({
                method: 'GET',
                url: 'http://localhost:8080/JSJA-1.0/ListResidence'
            }).then(function successCallback(response) {
                $scope.Lists= response.data;
                $log.info($scope.Lists);
            });
        });
    }

    $scope.listClick = function()
    {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/JSJA-1.0/ListResidence'
        }).then(function successCallback(response) 
        {
            $scope.Lists= response.data;
            $log.info($scope.Lists);
        });
    }

});

