'use strict';

import './css/index.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.showcase.config'

export default angular.module('app.showcase', [uiRouter])
    .config(routing)

    .component('boardBooks', require('./board.component'))
    .component('bookInfo', require('./bookInfo.component'))

    .service('BooksResourceService', require('./books.resource.service'))
    .service('BooksRestangularService', require('./books.restangular.service'))

    .name;