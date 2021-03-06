/**
 * Created by dongwanlong on 2016/4/6.
 */
define([
    'angular',
    'angular-animate',
    'angular-route',
    'angular-cookies',
    'angular-sanitize',
    'infinite-scroll',
    'ui-bootstrap',
    'ui-ace',
    'ng-toaster',
    'ng-rzslider',
    'language',
    'common-language',
    './controllers/controllers',
    './filters/filters',
    './services/services',
    './directives/directives',
    '../common/services/services',
    '../common/directives/directives',
    '../common/filters/filters',

], function (angular) {
    var app = angular.module('myApp', [
        //angular
        'ngAnimate',
        'ngRoute',
        'ngCookies',
        'ngSanitize',
        'infinite-scroll',
        'ui.bootstrap',
        'ui.ace',
        'toaster',
        'rzModule',

        //app
        'app.controller',
        'app.filter',
        'app.service',
        'app.directive',
        'common.service',
        'common.directive',
        'common.filter',
        'app.language',
        'common.language',

    ]);
    app.config(['$httpProvider', function ($httpProvider) {

        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $httpProvider.defaults.headers.post['Accept'] ='application/json, text/javascript, */*; q=0.01';
        $httpProvider.defaults.headers.post['Accept-Language'] ='zh-CN,zh;q=0.8,en-us;q=0.5;en;q=0.3';
        $httpProvider.defaults.headers.post['X-Requested-With'] ='XMLHttpRequest';

        $httpProvider.defaults.headers.get['X-Requested-With'] ='XMLHttpRequest';
        //disable IE ajax request caching  http://stackoverflow.com/questions/16098430/angular-ie-caching-issue-for-http
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
        $httpProvider.defaults.transformRequest = function(data){
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }]);
    app.run(['Utility','CommonLanguageService','leEngineConfig','LanguageService','gEngineStatus','$route', '$rootScope', 'Config',function (Utility,CommonLanguageService,leEngineConfig,LanguageService,gEngineStatus, $route, $rootScope, Config) {
        $rootScope.REGEX_MESSAGE = angular.extend({}, Config.REGEX_MESSAGE, leEngineConfig.REGEX_MESSAGE);
        $rootScope.EMPTY_TEXT = Config.EMPTY_TEXT;

        for(var key in CommonLanguageService){
            $rootScope[key] =CommonLanguageService[key];
        }
        for(var key in LanguageService){
            $rootScope[key] =LanguageService[key];
        }

        $rootScope.$on('$routeChangeStart', function(evt, future, current ) {
            if(!future.$$route || !future.$$route.originalPath)return;
            var futureUrl = future.$$route.originalPath;
            gEngineStatus.decodeRouter(futureUrl,future.params.id,future.params.name,future.params.tab);
        });
    }]);

    return app;
});
