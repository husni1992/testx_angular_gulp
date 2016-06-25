(function(){
    'use strict';
    
    angular
        .module('teacher.module')
        .controller('TeacherController', TeacherController);
    
    TeacherController.$inject = ['$stateParams', 'myData'];
    /* @ngInject */
    function TeacherController($stateParams, myData){
        var vm = this;
        vm.stateParam = $stateParams.id;
        vm.controller = 'TeacherController';
        vm.dataArray = myData;
    }
    
})()