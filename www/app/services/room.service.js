(function (angular) {
	angular
		.module("application")

		.factory("roomService", function ($http, applicationSettings) {
			return {
				getRoomById,
				fetchRoomsFromDB,
				resetRoomsToDB,
				writeRoomReservation,
				getRoomDateKey
			};

			function getRoomById(id) {
				return $http.get(applicationSettings.getFirebaseRestUrl(`rooms/${id}`))
					.then(response => response.data);
			}

			function fetchRoomsFromDB() {
				return $http.get(applicationSettings.getFirebaseRestUrl("rooms"))
					.then(response => response.data);
			}

			function resetRoomsToDB() {
				const url = applicationSettings.getFirebaseRestUrl("rooms");

				return $http.delete(url)
					.then(() => {
						return $http.put(url, {
							halo: {
								name: "Halo",
								picture: 'halo.jpg'
							},
							sonic: {
								name: "Sonic",
								picture: 'sonic.jpg'
							},
							zelda: {
								name: "Zelda",
								picture: 'zelda.jpg'
							},
							starfox: {
								name: "Star Fox",
								picture: 'starfox.jpg'
							},
							simcity: {
								name: "Sim City",
								picture: 'simcity.jpg'
							}
						});
					})
					.then(fetchRoomsFromDB);
			}

			function writeRoomReservation(id, reservation) {
				return getRoomById(id)
					.then(room => {
						// we get room so some validation could be performed here before we post, though note this doesn't
						// eliminate race conditions

						// currently, this just posts to the current date because nothing is passed in getRoomDateKey
						return $http.post(applicationSettings.getFirebaseRestUrl(`rooms/${id}/reservations/${getRoomDateKey()}`), reservation);
					});
			}

			function getRoomDateKey(date) {
				let dateKey;

				dateKey = date ? new Date(date).toDateString() : new Date().toDateString();
				dateKey = dateKey.replace(/ /g, "");

				return dateKey;
			}
		});
}(window.angular));
