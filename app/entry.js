'use strict';

const angular = require('angular');

angular.module('ngAdventure', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/game-pad/game-pad.js');