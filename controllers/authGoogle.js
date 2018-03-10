"use strict";

var self = this;

function authMethod(object){
    console.log(object);
    aux();
}

function aux(){
    console.log('Hello')
}

module.exports = {authMethod}


