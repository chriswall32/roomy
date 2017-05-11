(function (angular) {
  angular
    .module("application")
    .component("gwLogin", {
      templateUrl : "www/app/components/login/login.htm",
      controller  : "loginComponentController",
      controllerAs: "ctrl"
    });
} (window.angular));
