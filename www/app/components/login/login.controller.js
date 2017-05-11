( function (angular) {
  angular
    .module("application")
    .controller("loginComponentController", function($scope, loginService){
      this.loginService = loginService;

      this.getLoggedInUser = loginService.getLoggedInUser;

      this.refresh = function() {
        console.log("Controller refresh called");
        $scope.$apply();
      }

    });
} (window.angular));
