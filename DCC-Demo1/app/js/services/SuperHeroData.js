/**
 * Created by Chris Holwerda on 3/3/14.
 *
 *
 */
superheroApp.factory('superheroData', function(){
    return{
        users:
        [
        {
            'name': 'Clark Kent',
            'emailAddress':'Superman@gmail.com'
        },
        {
            'name': 'Bruce Wayne',
            'emailAddress':'Batman@gmail.com'
        },
        {
            'name': 'Lex Luthor',
            'emailAddress':'GreatestCriminalMind@gmail.com'
        }
        ]
    }
})
