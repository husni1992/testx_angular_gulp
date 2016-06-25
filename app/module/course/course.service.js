(function(){
    'use strict';
    
    angular
        .module('course.module')
        .factory('CourseService', CourseService);
    
    CourseService.$inject = [];
    /* @ngInject */
    function CourseService(){
        var service = {
            getAllCourses: getAllCourses
        };
        return service;
        
        function getAllCourses(){
            var courseList = [
                {
                    name: "ICT",
                    code: "c001",
                    durationMonths: 6 
                },
                {
                    name: "Maths",
                    code: "c002",
                    durationMonths: 8.5
                },
                {
                    name: "Science",
                    code: "c003",
                    durationMonths: 9
                }
            ]
            return courseList;
        }
    }
    
})()