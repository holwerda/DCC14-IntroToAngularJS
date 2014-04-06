/**
 * Created by CHolwerda on 4/1/14.
 */
superheroApp.factory('superheroData', function($http, $log){
    return {
        getSuperHeroes: function(successcb){
            $http({method: 'GET', url: 'data/superheroes.json'}).success(function (data, status, headers, config){
                $log.info(data, status, headers(), config);
                successcb(data)
            }).error(function(data, status, headers, config){
                $log.warn(data, status, headers(), config);
            });
        }
    };
})