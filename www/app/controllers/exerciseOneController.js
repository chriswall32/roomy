(function (angular) {
  angular
    .module("application")
    .controller("exerciseOneController", function(es) { //inject

      this.exerciseService = es; //expose

      this.title = "Exercise 1, in the controller";

			this.clickAction = () => {
				console.log(this);
			};

			this.students = [
				{ name: "John" },
				{ name: "Josh" },
				{ name: "Mack" }
			];

})

}(window.angular));
