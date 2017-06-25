'use strict';
var APP_ID = 'amzn1.ask.skill.27e675ae-4a57-4877-9774-d7635062bb7a';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = 'Hello';

var GreeterService = function() {
  AlexaSkill.call(this,APP_ID);
};

GreeterService.prototype = Object.create(AlexaSkill.prototype);

var hellowResponseFunction = function(intent, session, response) {
  response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = hellowResponseFunction;

GreeterService.prototype.intentHandlers = {
  'HelloWorldIntent': hellowResponseFunction
};

exports.handler = function(event, context) {
  var greeterService = new GreeterService();
  greeterService.execute(event, context);
};
