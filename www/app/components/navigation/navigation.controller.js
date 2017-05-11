(function(angular) {
  angular
    .module("application")
    .controller("navigationComponentController", function($location, navigationService, roomService) {
      this.$onInit = function() {
        this.navigationService = navigationService;
        this.roomService = roomService;
        roomService.fetchRoomsFromDB();

        // console.log("NavigationInit");

        // let welcomeItem = {
        //   title: "Welcome",
        //   url: "/welcome"
        // };
        //
        // navigationService.addNavigationItem(welcomeItem);

        // add rooms
        // let rooms = roomService.fetchRoomsFromDB();
        // console.log(rooms);
        // rooms.forEach(function(room) {
        //   console.log(room);
        //   const itemToAdd = {
        //     title: room.name,
        //     url: "/room/$(room.id)"
        //   };
        //   navigationService.addNavigationItem(itemToAdd);
        // });

        // add about link
      //   let aboutItem = {
      //     title: "About",
      //     url: "/about"
      //   };
      //
      //   navigationService.addNavigationItem(aboutItem);
      //
      };

      this.isItemActive = function(url) {
        return url === $location.path();
      };



    });
}(window.angular));
