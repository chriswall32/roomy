(function(angular) {
  angular
    .module("application")
    .factory("loginService", function($rootScope) {
      let loggedInUser = null;
      let notifyControllerCallback = null;

      //actively listens Firebase authentication and fires callback
      firebase.auth().onAuthStateChanged(updateLoginStatus);

      return {
        getLoggedInUser,
        login,
        logout
      };

      function updateLoginStatus(authenticatedUser) {
        // console.log(authenticatedUser);

        loggedInUser = authenticatedUser;
        $rootScope.$apply();
      }

      function getLoggedInUser() {
        return loggedInUser;
      };

      function login() {

        return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
      }

      function logout() {
        loggedInUser = null;
        return firebase.auth().signOut();
      }
    });
}(window.angular));
