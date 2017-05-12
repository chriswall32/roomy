(function(angular) {
  angular
    .module("application", ["ngRoute"])

    .constant("applicationSettings", {
      applicationTitle: "Geekwise Room Reserve App",

      getFirebaseRestUrl: function(suffix) {
        const prefix = "https://confdeconflictor.firebaseio.com/";
        const ext = ".json";

        return prefix + suffix + ext;
      },

      getImagePath: function(file) {
        return `www/assets/images/${file}`;
      }
    })


    .config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      // console.log("Find Me");

      $routeProvider
				.when("/room/:id", {
					template : "<gw-room></gw-room>"
				})
				.when("/welcome", {
					template : "<gw-login></gw-login>"
				})
				.when("/about", {
					template : "<gw-login></gw-login>"
				})
				.otherwise({
					template : "<gw-login></gw-login>"
				});
    }]);
    

}(window.angular));
