(function (angular) {
  angular
    .module("application")
    .component("gwRoomStatusHeader", {
      templateUrl   : "www/app/components/room/room-status-header/room-status-header.htm",
      controller    : "roomStatusHeaderComponentController",
      controllerAs  : "ctrl",
      bindings       : {
        room : "@"
      }

    });
} (window.angular));
