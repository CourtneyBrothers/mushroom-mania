"use strict";

angular.module("mushroom").factory("factory",function($q,$http){

    let getShrooms = ()=>{
        return $q((resolve,reject)=>{
            $http
                .get("https://mushroom-mania-67f25.firebaseio.com/mushrooms.json")
                .then((mushrooms)=>{
                    resolve(mushrooms);
                    console.log("fb data",mushrooms)
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    };
    return { getShrooms };
});