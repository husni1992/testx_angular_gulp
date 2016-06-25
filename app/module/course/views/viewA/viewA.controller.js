(function(){
    'use strict';
    
    angular
        .module('course.module')
        .controller('CourseViewAController', CourseViewAController);
    
    CourseViewAController.$inject = ['CourseService'];
    /* @ngInject */
    function CourseViewAController(CourseService){
        var vm = this;
        vm.controller = 'CourseView_B_Controller';
        
        vm.getCourseList = function(){
            vm.courseList = CourseService.getAllCourses();
        };
    }
    
})()