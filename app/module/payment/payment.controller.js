(function(){
    'use strict';
    
    angular
        .module('payment.module')
        .controller('PaymentController', PaymentController);
    
    PaymentController.$inject = [];
    /* @ngInject */
    function PaymentController(){
        var vm = this;
    }
    
})()