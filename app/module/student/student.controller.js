(function(){
    'use strict';
    
    angular
        .module('student.module')
        .controller('StudentController', StudentController);
    
    StudentController.$inject = [];
    /* @ngInject */
    function StudentController(){
        var vm = this;
        vm.controller = 'StudentController';
        
        vm.showImage = false;
        vm.toggleShow = function(){
            vm.showImage = !vm.showImage;
        }
    }
    
})()