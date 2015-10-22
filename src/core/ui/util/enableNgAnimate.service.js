(function(){
    'use strict';
    angular.module('gantt').service('ganttEnableNgAnimate', ['$injector', function($injector) {
        var ngAnimate;
        try {
            ngAnimate = $injector.get('$animate');
        } catch (e) {
        }

        if (ngAnimate !== undefined) {
<<<<<<< HEAD
            return function(enabled, element) {

                if (angular.version.major === 1 && angular.version.minor >= 4) {
                    ngAnimate.enabled(element,false);
                }
                else {
                    ngAnimate.enabled(false, element);
=======
            return function(element, enabled) {
                if (angular.version.major >= 1 && angular.version.minor >= 4) {
                    // AngularJS 1.4 breaking change, arguments are flipped.
                    ngAnimate.enabled(element, enabled);
                } else {
                    ngAnimate.enabled(enabled, element);
>>>>>>> 7a436158da432b5e730bfced89735d703cc25897
                }

            };
        } else {
            return angular.noop;
        }


    }]);
}());

