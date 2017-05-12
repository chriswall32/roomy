(function(angular) {
  angular
    .module("application")
    .controller("navigationComponentController", function($location, navigationService, roomService) {
      this.$onInit = function() {
        this.navigationService = navigationService;


        let welcomeItem = {
          title: "Welcome",
          url: "/welcome"
        };

        navigationService.addNavigationItem(welcomeItem);

        //add rooms
        roomService.fetchRoomsFromDB().then(rooms => {

          angular.forEach(rooms, function(objectValue, objectKey) {
						const itemToAdd = {
							title : objectValue.name,
							url   : `/room/${objectKey}`
						};
            navigationService.addNavigationItem(itemToAdd);
          });

          //add about link
          let aboutItem = {
            title: "About",
            url: "/about"
          };

          navigationService.addNavigationItem(aboutItem);
      });
      };

      this.isItemActive = function(url) {
        return url === $location.path();
      };



    });
}(window.angular));
