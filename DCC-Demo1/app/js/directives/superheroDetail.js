/**
 * Created by CHolwerda on 4/1/14.
 */

superheroApp.directive('mySuperhero', function($compile){
    return {
        restrict: 'A',
        template: "{{user.name}}<input type='text' ng-model='user.name'/> / {{user.emailAddress}}<input type='text' ng-model='user.emailAddress'/>"
    }
})


