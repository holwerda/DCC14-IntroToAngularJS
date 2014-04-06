/**
 * Created by Chris Holwerda on 3/1/14.
 */
'use strict';

var superheroApp = angular.module('superheroApp', []);

superheroApp.controller('SuperheroCtrl', function SuperheroController($scope, superheroData) {
    $scope.users = superheroData.users;
    $scope.order = 'name';
});