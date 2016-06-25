(function(){
    'use strict';
    
    angular
        .module('app')
        .config(appConfig);
    
    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
    /* @ngInject */
    function appConfig($urlRouterProvider, $stateProvider){
        
        $stateProvider
        .state('courseState', {
            url: '/course',
            views: {
                viewA:{
                            templateUrl: 'app/module/course/views/viewA/viewA.html',
                            controller: 'CourseController',
                            controllerAs: 'vm'
                        },
                viewB: {
                            templateUrl: 'app/module/course/views/viewB/viewB.html',
                            controller: 'CourseController',
                            controllerAs: 'vm'
                        },
            }
        })
        .state('studentState', {
            url: '/student',
            templateUrl: 'app/module/student/student.tmpl.html',
            controller: 'StudentController',
            controllerAs: 'vm'
        })
        .state('teacherState', {
            url: '/teacher',
            templateUrl: 'app/module/teacher/teacher.tmpl.html',
            controller: 'TeacherController',
            controllerAs: 'vm'
        });
        
        $urlRouterProvider.otherwise('/course');
    }
})()