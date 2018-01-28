"use strict";


angular.module("mushroom").controller("MushroomController",function($scope,factory){
    factory.getShrooms()
    .then((shroomObjects)=>{
        $scope.shroomArr=[];
        for(let shroom in shroomObjects.data){
            $scope.shroomArr.push(shroomObjects.data[shroom]);
        }
    });
});