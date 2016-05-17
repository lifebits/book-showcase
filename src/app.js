'use strict';

import 'angular-material/angular-material.scss'
import './css/main.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import restangular from 'restangular';

import ngMaterial from 'angular-material';

import _ from 'lodash';

import routing from './app.config';

import showcase from './showcase';

angular.module('app', [uiRouter, 'restangular', ngResource, ngMaterial, showcase])
    .config(routing)

    .directive('checkLoadingImg', require('./checkLoadingImg.directive'))

    .component('pageNotFound', require('./404.component'))

    .service('FileService', require('./file.service'))
;