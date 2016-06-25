(function(){
    'use strict';
    
    angular
        .module('app')
        .factory('CourseRepositoryService', CourseRepositoryService);
    
    CourseRepositoryService.$inject = [];
    /* @ngInject */
    function CourseRepositoryService(){
        var service = {
            getAllCourses: getAllCourses
        };
        
        return service;
        
        function getAllCourses(){
            var coursesArray = [
                {name: "ICT", duration: '1 year', code: 1},
                {name: "Maths", duration: '2 year', code: 2},
                {name: "Science", duration: '6 months', code: 3},
                {name: "BioMedicar", duration: '3 months', code: 4}
            ];
            
            return coursesArray;
        }
    }
    
})()