(function (angular) {
  angular
    .module("application")
    .component("gwRoomReservationForm", {
      templateUrl   : "www/app/components/room/room-reservation-form/room-reservation-form.htm",
      controller    : "roomReservationFormController",
      controllerAs  : "ctrl",
      bindings      : {
        room        : "<",
				onSubmitted : "&"
      }

    });
} (window.angular));
