"use strict";

angular.module('lab_new', [ 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/static/lab_new/pages/home.html",
                controller: "HomeController",
            })
            .when("/research", {
                templateUrl: "/static/lab_new/pages/research.html"
            })
            .when("/resource", {
                templateUrl: "/static/lab_new/pages/resource.html"
            })
            .when("/publication", {
                templateUrl: "/static/lab_new/pages/publication.html"
            })
            .when("/people", {
                templateUrl: "/static/lab_new/pages/people.html",
                controller: "PeopleController",
            })
            .when("/news", {
                templateUrl: "/static/lab_new/pages/news.html"
            })
    })
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    });


