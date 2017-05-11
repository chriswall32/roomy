(function (angular) {
  angular
    .module("application")
    .component("gwRoomReservationForm", {
      templateUrl   : "www/app/components/room/room-reservation-form/room-reservation-form.htm",
      controller    : "roomReservationFormComponentController",
      controllerAs  : "ctrl",
      bindings      : {
        room : "<"
      }

    });
} (window.angular));
