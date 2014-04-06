/**
 * Created by CHolwerda on 4/3/14.
 */
var superheroApp = angular.module('superheroApp', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider.when('/newSuperhero',
            {
                templateUrl:'templates/NewSuperhero.html',
                controller: 'dccSuperHeroCtrl'
            });

    });