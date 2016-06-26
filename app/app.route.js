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
            url: '/teacher/:id',
            templateUrl: 'app/module/teacher/teacher.tmpl.html',
            controller: 'TeacherController',
            controllerAs: 'vm',
            resolve: {
                myData : function(CourseRepositoryService){
                    return CourseRepositoryService.getAllCourses();
                }
            }
        })
        .state('teacherState.namitha', {
            url: '/namitha',
            templateUrl: 'app/module/teacher/namitha.html',
        })
        
        .state('paymentState', {
//            abstract: true,
            url:'/payment/settle/:paymentId',
            templateUrl: 'app/module/payment/payment.tmpl.html',
            controller: 'PaymentController'
        })
        .state('paymentState.cash', {
            url: '/cash',
            templateUrl: 'app/module/payment/cash/payment.cash.html'
        })
        .state('paymentState.cheque', {
            url: '/cash',
            templateUrl: 'app/module/payment/cheque/payment.cheque.html'
        })
        
        $urlRouterProvider.otherwise('/course');
    }
})()