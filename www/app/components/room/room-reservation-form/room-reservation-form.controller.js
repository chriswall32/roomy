(function (angular) {
    angular
        .module("application")

        .controller("roomReservationFormComponentController", function () {
          this.$onInit = function() {
          this.loading = true;

          this.startTime = new Date();
          this.startTime.setHours(0, 0, 0, 0);

          this.endTime = new Date();
          this.endTime.setHours(0, 0, 0, 0);

          this.reserveReasons = [
              "Birthday",
              "Conference",
              "Interview",
              "Scrum Meeting",
              "Honeymoon"
          ];

          roomService.getRoomById($routeParams.id).then(roomResult => {
            this.room = roomResult;
            this.loading = false;
          });
        }

          this.roomSubmission = function() {
            
            if(!this.room.reservations) {
              this.room.reservations = [];
            }

            console.log("Reserving for", this.room);
            console.log(this.myForm);

    				if (this.getMinTime() >= this.endTime) {
    					this.myForm.endTime.$setValidity("min", false)

    					return alert("Message from controller: time invalid");
    				}

    				if (this.myForm.$invalid) return alert("Message from controller: form invalid");

    				alert("Room submitted");
    			}

    			this.getMinTime = function() {
    				let date = new Date(this.startTime);
    				date.setHours(date.getHours() + 1);

    				return date;
    			};


        });
}(window.angular));
