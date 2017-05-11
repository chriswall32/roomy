(function (angular) {
  angular
    .module("application")
    .component("gwRoomReservationList", {
      templateUrl   : "www/app/components/room/room-reservation-list/room-reservation-list.htm",
      controller    : "roomReservationListComponentController",
      controllerAs  : "ctrl",
      require       : {
        parentController : "^gwRoom"
      }

    });
} (window.angular));
