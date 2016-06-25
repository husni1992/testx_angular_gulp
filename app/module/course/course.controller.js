(function(){
    'use strict';
    
    angular
        .module('course.module')
        .controller('CourseController', CourseController);
    
    CourseController.$inject = ['CourseService', '$scope'];
    /* @ngInject */
    function CourseController(CourseService, $scope){
        var vm = this;
        vm.courseList = null;
        vm.controller = 'CourseController';
        
        vm.testclick = function(){
            alert("testclick");
        }
        
        function check(){
            vm.got = vm.courseList.length > 0 ? vm.got = "Yah got" : ""; 
        }
        
        vm.getCourseList = function(){
            vm.courseList = CourseService.getAllCourses();
            check();
        };
        
    }
    
})()