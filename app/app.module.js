(function(){
    'use strict';
    
    angular
        .module('app', [
            'ui.router',
        
            'course.module',
            'student.module',
            'teacher.module',
            'payment.module'
        ])
    
})()