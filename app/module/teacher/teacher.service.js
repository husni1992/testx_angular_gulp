(function(){
    'use strict';
    
    angular
        .module('teacher.module')
        .factory('TeacherService', TeacherService);
    
    TeacherService.$inject = [];
    /* @ngInject */
    function TeacherService(){
        var service = {
            
        };
        return service;
    }
    
})()