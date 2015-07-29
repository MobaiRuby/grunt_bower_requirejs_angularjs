define(['angular'], function(angular) {
  //return {
  //  hello: function() {
  //    alert("hello, requirejs");
  //  }
  //}
  angular.module('mobileApp', [])
      .config(function($interpolateProvider){
            $interpolateProvider.startSymbol('[[').endSymbol(']]');
          }
      )
      .controller('MyController', ['$scope', function ($scope) {
        $scope.name = 'Change the name';
      }]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['mobileApp']);
  });
});