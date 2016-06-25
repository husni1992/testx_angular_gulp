(function(){
    'use strict';
    
    angular
        .module('teacher.module')
        .controller('TeacherController', TeacherController);
    
    TeacherController.$inject = [];
    /* @ngInject */
    function TeacherController(){
        var vm = this;
        vm.controller = 'TeacherController';
    }
    
})()