/*
 db/schema.js contains database schema description for application models
 by default (when using jugglingdb as ORM) this file uses database connection
 described in config/database.json. But it's possible to use another database
 connections and multiple different schemas, docs available at

 http://railwayjs.com/orm.html

 Example of model definition:

 define('User', function () {
     property('email', String, { index: true });
     property('password', String);
     property('activated', Boolean, {default: false});
 });

 Example of schema configured without config/database.json (heroku redistogo addon):
 schema('redis', {url: process.env.REDISTOGO_URL}, function () {
     // model definitions here
 });

*/

var Device = describe('Device', function () {
    property('name', String);
    property('uuid', String);
    set('restPath', pathTo.devices);
});

var User = describe('User', function () {
	property('name', String);
	property('email', String);
	property('auth_token', String);
	property('password_hash', String);
    set('restPath', pathTo.users);
});

