(function (angular) {
  angular
    .module("application")
    .component("gwNavigation", {
      templateUrl : "www/app/components/navigation/navigation.htm",
      controller  : "navigationComponentController",
      controllerAs: "ctrl"
    });
} (window.angular));
