(function(){
    'use strict';
    
    angular
        .module('student.module')
        .factory('StudentService', StudentService);
    
    StudentService.$inject = [];
    /* @ngInject */
    function StudentService(){
        var service = {
            
        };
        return service;
    }
    
})()