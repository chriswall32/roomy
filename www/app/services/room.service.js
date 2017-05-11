(function(angular) {
	angular
		.module("application")

		.factory("roomService", function($timeout) {
			let rooms = null;

			return {
				getRooms,
				getRoomById,
				fetchRoomsFromDB
			};

			function getRooms() {
				return rooms;
			}

			function getRoomById(id) {
				return $timeout(function() {
					let roomToReturn = null;

					rooms.forEach(function(room) {
						if (id == room.id) roomToReturn = room;
					});

					return roomToReturn;
				}, 1500);
			}

			function fetchRoomsFromDB() {
				return $timeout(function() {
					rooms = [
						{
							name    : "Halo",
							id      : 1,
							picture : 'www/assets/images/halo.jpg'
						},
						{
							name    : "Sonic",
							id      : 2,
							picture : 'www/assets/images/sonic.jpg'
						},
						{
							name    : "Zelda",
							id      : 3,
							picture : 'www/assets/images/zelda.jpg'
						},
						{
							name    : "Star Fox",
							id      : 4,
							picture : 'www/assets/images/starfox.jpg'
						},
					];

					return rooms;
				}, 1500);
			}
		});
}(window.angular));
