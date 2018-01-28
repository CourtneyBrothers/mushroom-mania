"use strict";
angular.module("mushroom",["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/",{
            templateUrl:"partials/partials.html",
            controller:"MushroomController"
        })
        .otherwise("/")
});