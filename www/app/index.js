( function(angular) {
  angular
    .module("application", ["ngRoute"])


    .config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

			// console.log("Find Me");

      $routeProvider
        .when("/room/:id", {
          resolve  : {
						isLoggedIn : function($location, loginService) {
							return !loginService.getLoggedInUser() ? $location.path("/welcome") : true;
						}
					},
          template : "<gw-room></gw-room>"
        })
        .otherwise({
          template: "<gw-login></gw-login>"
        });
    } ] );

}(window.angular));
