(function (angular) {
  angular
    .module("application")
    .controller("exerciseTwoController", function(es) { //inject

      this.exerciseService = es; //expose

      this.title = "Exercise 2";


      const originalButtonText = "Button Text";
      this.buttonText = originalButtonText;

      this.possibleColors = [
        {name  : "Brown",
        hex   : "#a52"},
        {
          name : "Blue",
          hex : "#0000FF"
        },
        {
          name : "Gainsboro",
          hex : "#dcdcdc"
        }
      ];

      this._getRandomColor = () => {
        const randomColor = this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
        return randomColor;
      };

      this._createObject = () => {
        const returnObject = {
          name       : "Obj" + (this.objectArray.length + 1),
          clickCount : 0,
          color : this._getRandomColor().hex
        };
        console.log(returnObject);
        return returnObject;
      };


      this.buttonMouseEnter = function () {
        this.buttonText = "New Button Text";
      };

      this.buttonResetClick = () => {
        this.buttonText = originalButtonText;
      };

      this.objectArray = [];

      this.controllerInitObject = this._createObject();


      //this.controllerInitObject.clickCount = 5;

      this.addNewObject = function() {
        this.objectArray.push(this._createObject());
      };

      this.addClickCount = function (obj) {
        obj.clickCount++;
        console.log(obj.name, obj.clickCount);
      }

      this.colorfilterChanged = () => {
        console.log(this.filter.color);
        if(!this.filter.color) delete this.filter.color;
      }


    });
}(window.angular));
