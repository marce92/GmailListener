"use strict";
var _ = require('underscore');
var googleAuth = require('google-auth-library');

function authMethod(object){
    let decoded_object = decodeObject(object);
    let auth = new googleAuth();

    let clientId = (!_.isUndefined(decoded_object.client_id)) ? decoded_object.client_id : '';
    let clientSecret = (!_.isUndefined(decoded_object.client_secret)) ? decoded_object.client_secret : '';
    let clientUrl = (!_.isUndefined(decoded_object.redirect_uris[0])) ? decoded_object.redirect_uris[0] : '';

    try {
        let oauth2Client = new auth.OAuth2(clientId, clientSecret, clientUrl);

        console.log(oauth2Client);
    } catch(err) {
        console.log('Error on Google authentication');
    }
}


function decodeObject(object) {
    let main = JSON.parse(object);

    main = (!_.isUndefined(main.installed)) ? main.installed : {};

    return main;
}

module.exports = {
    authMethod
}


