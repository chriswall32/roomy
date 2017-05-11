(function(angular) {
  angular
    .module("application")
    .service("es", function() {
      this.loggedInUser = {};
      this.login = login;
      this.logout = logout;



      //implementation
      function printConsole () {
        console.log("Our very first injectable");
      };

      function login () {
        this.loggedInUser = {
          name : "userName",
          photo: ('https://unsplash.com/?photo=ehNGoB6q5p4'),
          userPassword : "password",
          date : Date.now,
        };
        console.log(this.loggedInUser);

      };


      function logout() {
        this.loggedInUser = {};
        console.log(this.loggedInUser);
      };

    })
    .factory("es", function() {
            return {
                getLoggedInUser,
                login,
                logout
            };


            let loggedInUser = { test : "test" };

            function getLoggedInUser() {
                console.log("Getting loggedInUser", loggedInUser);
                return loggedInUser;
            }

            function login() {
                console.log("We're here factory style");
                debugger;

                loggedInUser = {
                    name      : "Ted",
                    photo     : "angularicon.jpg",
                    loginTime : Date.now()
                }
            }

            function logout() {
                loggedInUser = {};
            }
        })
}(window.angular));
