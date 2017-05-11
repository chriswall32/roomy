(function(angular) {
  angular
    .module("application")
    .factory("loginService", function() {
      let loggedInUser = null;
      let notifyControllerCallback = null;

      //actively listens Firebase authentication and fires callback
      firebase.auth().onAuthStateChanged(updateLoginStatus);

      return {
        getLoggedInUser,
        login,
        logout
      };

      function getLoggedInUser() {
        return loggedInUser;
      };

      function updateLoginStatus(authenticatedUser) {
        console.log(authenticatedUser);

        loggedInUser = authenticatedUser;

        if (notifyControllerCallback) notifyControllerCallback();

      }

      function login(callback) {
        notifyControllerCallback = callback;
        return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
      }

      function logout() {
        loggedInUser = null;
        return firebase.auth().signOut();
      }
    });
}(window.angular));
