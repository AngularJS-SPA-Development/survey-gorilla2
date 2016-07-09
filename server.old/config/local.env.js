'use strict';

// Environment variables that grunt will set when the server starts locally. Use for your api keys, secrets, etc.
// You will need to set these on the server you deploy to.
//
// This file should not be tracked by git.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "surveygorilla-secret",

  FACEBOOK_ID: '384110018404014',
  FACEBOOK_SECRET: 'b956ff30a04b96a071ac601cf1aaf6c8',

  TWITTER_ID: 'DS8XP6qG4gN3zIQZx57Dmp5X5',
  TWITTER_SECRET: 'YU3mChD5USqcUwIHPfE6dS6IuYXDuXMkTAKpKNEvEyUEMP83Ig',

  GOOGLE_ID: 'app-id',
  GOOGLE_SECRET: 'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
