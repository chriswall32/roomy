(function (angular) {
  angular
    .module("application")
    .component("gwRoom", {
      templateUrl   : "www/app/components/room/room.htm",
      controller    : "roomComponentController",
      controllerAs  : "ctrl"

    });
} (window.angular));
