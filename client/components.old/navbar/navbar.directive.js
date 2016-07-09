'use strict';

angular.module('surveyGorilla2App')
    .directive('navbar', () => ({
        templateUrl: 'components/app/navbar/navbar.html',
        restrict: 'E',
        controller: 'NavbarController',
        controllerAs: 'nav'
    }));