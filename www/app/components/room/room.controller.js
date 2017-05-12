(function (angular) {
	angular
		.module("application")

		.controller("roomComponentController", function ($routeParams, applicationSettings, roomService) {
			this.$onInit = function() {
				this.initRoom();
			};

			this.onSubmitted = function() {
				console.log("Our form component just updated roomComponent through output binding");
				this.initRoom();
			};

			this.initRoom = function() {
				this.loading = true;

				roomService.getRoomById($routeParams.id)
					.then(roomResult => {
						this.room = roomResult;

						// attach id to room object for convenience
						this.room.id = $routeParams.id;

						// update room picture with path to our local asset
						this.room.picture = applicationSettings.getImagePath(this.room.picture);

						// hide loading UI
						this.loading = false;
					});
			}
		});
}(window.angular));
