define([
    'jqueryCookie'
], function(jqueryCookie) {
    'use strict';

    var options = {
        favorites: [],
        rating: [],

        isAuth: function(){
            var sessionCookie = jqueryCookie('connect.sid');
            var userCookie = jqueryCookie('user_f');
            if(sessionCookie !== '' && sessionCookie !== null && userCookie !== '' && userCookie !== null){
                return true;
            } else {
                return false;
            }
        }
    };

    return options;
});