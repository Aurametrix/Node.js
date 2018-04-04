    "use strict";

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var Dog = (function() {
      function Dog() {
        _classCallCheck(this, Dog);
      }

      Dog.prototype.bark = function bark() {
        console.log("Bark!");
      };

      return Dog;
    })();
