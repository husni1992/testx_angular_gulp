(function(){
    'use strict';
    
    angular
        .module('app')
        .directive('courseSearch', courseSearch);
    
    courseSearch.$inject = ['CourseRepositoryService'];
    /* @ngInject */
    function courseSearch(cService){
        return {
          restrict: 'E',
          link: link,
            scope: {
                methods: '=?'
            },
          templateUrl:'app/common/directives/course.search.html'
        };
        
        function link($scope, element, attrs) {
            
            
            if(angular.isObject($scope.methods)){
                var m = $scope.methods;
                
                m.dothemfast = function(){
                    console.info("This is from courseSearch directive huray");
                };
            }
            
            $scope.$watch('data', function(newval, oldval){
                var t = cService.getAllCourses();
            })
            
            $scope.kfc = "Husny";
              element.on('click', function () {
                  element.html('You clicked me2!');
              });
              element.on('mouseenter', function () {
                  element.css('background-color', 'red');
              });
              element.on('mouseleave', function () {
                  element.css('background-color', 'white');
              });
          }
    }
    
})();