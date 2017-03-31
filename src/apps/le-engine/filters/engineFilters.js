/**
 * Created by dongwanlong on 2016/4/7.
 */
define(['./app.filter'], function (filterModule) {
    filterModule.filter('activityFilter', ['LanguageService',function (LanguageService) {
        return function (value) {
            var array = value.split(" ");
            value = "";
            for(var i=0,len = array.length;i<len;i++){
                if(array[i]=="Create"){
                    value+= LanguageService.common.filters.activity.Create;
                }else if(array[i]=="Delete"){
                    value+= LanguageService.common.filters.activity.Delete;
                }else if(array[i]=="Member"||array[i]=="Members"||array[i]=="Members:"||array[i]=="Member:"){
                    value+= LanguageService.common.filters.activity.Member;
                }else if(array[i]=="Edit"||array[i]=="edit"){
                    value+= LanguageService.common.filters.activity.Edit;
                }else if(array[i]=="ImageGroup"||array[i]=="imageGroup"||array[i]=="imagegoup"){
                    value+= LanguageService.common.filters.activity.ImageGroup;
                }else if(array[i]=="image" || array[i] == "Images"){
                    value+= LanguageService.common.filters.activity.image;
                }else if(array[i]=="set"){
                    value+= LanguageService.common.filters.activity.set;
                }else if(array[i]=="build"||array[i]=="Build"){
                    value+= LanguageService.common.filters.activity.build;
                }else if(array[i]=="Tag"){
                    value+= LanguageService.common.filters.activity.Tag;
                }else if(array[i]=="History"){
                    value+= LanguageService.common.filters.activity.History;
                }else if(array[i]=="AccessLevelName:") {
                    value+= LanguageService.common.filters.activity.AccessLevelName+":";
                }else if(array[i]=="OldAccessLevelName:") {
                    value+= LanguageService.common.filters.activity.OldAccessLevelName+":";
                }else if(array[i]=="Set") {
                    value+= LanguageService.common.filters.activity.Set;
                }else if(array[i]=="NewAccessLevelName:") {
                    value+= LanguageService.common.filters.activity.NewAccessLevelName+":";
                }else if(array[i]=="To") {
                    value+= LanguageService.common.filters.activity.To;
                }else {
                    value+= array[i];
                }
            }
            return value;
        }
    }]);
    filterModule.filter('visibility', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value == 0){
                return LanguageService.common.filters.visibility.private;
            }else{
                return LanguageService.common.filters.visibility.public;

            }
        }
    }]);
    filterModule.filter('BuildResult', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value == 0){
                return LanguageService.common.filters.build.building;
            }else if(value == -1){
                return LanguageService.common.filters.build.failed;
            }else{
                return LanguageService.common.filters.build.success;
            }
        }
    }]);
    filterModule.filter('nocache', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value){
                return LanguageService.common.filters.nocache.nocache;
            }else{
                return LanguageService.common.filters.nocache.cache;

            }
        }
    }]);
    filterModule.filter('compileFormate', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value){
                return LanguageService.common.filters.compileFormate.compile;
            }else{
                return LanguageService.common.filters.compileFormate.noCompile;

            }
        }
    }]);
    filterModule.filter('authFormat', ['LanguageService',function (LanguageService) {
        return function (value) {
            switch (value) {
                case 0:
                    return LanguageService.common.auth.owner;
                    break;
                case 1:
                    return LanguageService.common.auth.Master;
                    break;
                case 2:
                    return LanguageService.common.auth.Developer;
                    break;
                case 3:
                    return LanguageService.common.auth.Reporter;
                    break;
                case 4:
                    return LanguageService.common.auth.Guest;
                    break;
                default:
                    break;
            }
        }
    }]);
    filterModule.filter('yesnoFormate', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value){
                return LanguageService.common.filters.yesnoFormate.yes;
            }else{
                return LanguageService.common.filters.yesnoFormate.no;

            }
        }
    }]);

    filterModule.filter('slbDBMatchFilter', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value){
                return LanguageService.common.filters.slbDBMatchFilter.match;
            }else{
                return LanguageService.common.filters.slbDBMatchFilter.noMatch;

            }
        }
    }]);

    filterModule.filter('optionListFilter', ['LanguageService',function (LanguageService) {
        return function (value) {
            return LanguageService.common.filters.optionListFilter[value];
        }
    }]);

    filterModule.filter('hasnoFilter', ['LanguageService',function (LanguageService) {
        return function (value) {
            if(value){
                return LanguageService.common.filters.hasnoFormate["has"];
            }else{
                return LanguageService.common.filters.hasnoFormate["no"];
            }
        }
    }]);

    filterModule.filter('getImageTagFilter', [function () {
        return function (value) {
            var imageTagValue = "";
            if(value && angular.isString(value)){
                var objValue = angular.fromJson(value);
                if (objValue.Image) {
                    var imageNameAttr = objValue.Image.split('/');
                    imageTagValue = imageNameAttr[1] + '/' + imageNameAttr[2];
                    return imageTagValue
                }
            }
            return imageTagValue
        }
    }]);

    filterModule.filter('monitorFilter', ['LanguageService',function (LanguageService) {
        return function (value) {
            //ÍøÂç
            if(value == "network"){
                return LanguageService.common.filters.monitor.network.title;
            }else if(value == "rx_rate"){
                return LanguageService.common.filters.monitor.network.rxRate;
            }else if(value == "tx_rate"){
                return LanguageService.common.filters.monitor.network.txRate;
            }
            //ÄÚ´æ
            else if(value == "memory"){
                return LanguageService.common.filters.monitor.memory.title;
            }else if(value == "usage"){
                return LanguageService.common.filters.monitor.memory.usage;
            } else if(value == "limit"){
                return LanguageService.common.filters.monitor.memory.limit;
            }
            //cpu
            else if(value == "cpu"){
                return LanguageService.common.filters.monitor.cpu.title;
            }else if(value == "usage_rate"){
                return LanguageService.common.filters.monitor.cpu.usageRate;
            }
            else{
                return value;
            }

        }
    }
    ]);
});