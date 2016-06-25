(function(){
    'use strict';
    
    angular
        .module('course.module')
        .controller('CourseViewBController', CourseViewBController);
    
    CourseViewBController.$inject = ['CourseService'];
    /* @ngInject */
    function CourseViewBController(CourseService){
        var vm = this;    
        vm.controller = 'CourseController';
        
        vm.getCourseList = function(){
            vm.courseList = CourseService.getAllCourses();
        };
    }
    
})()