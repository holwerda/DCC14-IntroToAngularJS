/**
 * Created by Chris Holwerda on 3/1/14.
 */
'use strict';

var superheroApp = angular.module('superheroApp', []);

superheroApp.controller('SuperheroCtrl', function ($scope, $http) {

    $http.get('data/superheroes.json').success(function(data) {
        $scope.users = data;
    });

    $scope.order = 'name';


});