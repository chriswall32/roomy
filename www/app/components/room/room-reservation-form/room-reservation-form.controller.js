(function (angular) {
	angular
		.module("application")

		.controller("roomReservationFormController", function(roomService) {
			this.$onInit = function () {
				this.startTime = new Date();
				this.startTime.setHours(12, 0, 0, 0);

				this.endTime = new Date();
				this.endTime.setHours(12, 0, 0, 0);

				this.reserveReasons = [
					"Birthday",
					"Conference",
					"Interview",
					"Scrum Meeting",
					"Client Meeting",
					"Honeymoon"
				];

				this.roomSubmission = function() {
					// some controller-side form validation done here
					if (this.getMinTime() >= this.endTime) return this.myForm.endTime.$setValidity("min", false);

					const reservationSubmission = {};
					reservationSubmission.email = this.email1;
					reservationSubmission.startTime = this.startTime;
					reservationSubmission.endTime = this.endTime;
					reservationSubmission.specialInstructions = this.specialInstructions;
					reservationSubmission.reserveReason = this.reserveReason;

					return roomService.writeRoomReservation(this.room.id, reservationSubmission)
						.then(this.onSubmitted())
						.catch(response => alert(response.data.error));
				}

				this.getMinTime = function () {
					let date = new Date(this.startTime);
					date.setHours(date.getHours() + .9);

					return date;
				};
			}
		});
}(window.angular));
