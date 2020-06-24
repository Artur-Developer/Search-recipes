"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Recipe =
/*#__PURE__*/
function () {
  function Recipe(id) {
    _classCallCheck(this, Recipe);

    this.id = id;
  }

  _createClass(Recipe, [{
    key: "getRecipe",
    value: function getRecipe() {
      var proxy, url, res;
      return regeneratorRuntime.async(function getRecipe$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              proxy = 'https://cors-anywhere.herokuapp.com/';
              url = "".concat(proxy, "https://forkify-api.herokuapp.com/api/get?rId=").concat(this.id);
              _context.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])("".concat(url)));

            case 5:
              res = _context.sent;
              this.title = res.data.recipe.title;
              this.img = res.data.recipe.image_url;
              this.ingredients = res.data.recipe.ingredients;
              this.publisher = res.data.recipe.publisher;
              this.publisher_url = res.data.recipe.publisher_url;
              this.rank = res.data.recipe.social_rank;
              console.log(res);
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 15]]);
    }
  }, {
    key: "calcCookTime",
    value: function calcCookTime() {
      var numOfIngredients = this.ingredients.length;
      var periods = Math.ceil(numOfIngredients / 3);
      this.time = periods * 15;
    }
  }, {
    key: "calcServings",
    value: function calcServings() {
      this.servings = 4;
    }
  }, {
    key: "parseIngredients",
    value: function parseIngredients() {
      var unitLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
      var unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
      var newIngredients = this.ingredients.map(function (el) {
        var ingredient = el.toLowerCase();
        unitLong.forEach(function (unit, index) {
          ingredient = ingredient.replace(unit, unitShort[index]);
        }); //rm parenthese (etc, '()')

        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' '); //Parse ingredients into count, unit and ingredient

        var arrIng = ingredient.split(' ');
        var unitIndex = arrIng.findIndex(function (el) {
          return unitShort.includes(el);
        });
        var objIng;

        if (unitIndex > -1) {
          var arrCount = arrIng.slice(0, unitIndex);
          var count;

          if (arrCount.length === 1) {
            count = eval(arrIng[0].replace('-', '+'));
          } else {
            count = eval(arrIng.slice(0, unitIndex).join('+'));
          }

          objIng = {
            count: count,
            unit: arrIng[unitIndex],
            ingredient: arrIng.slice(unitIndex + 1).join(' ')
          };
        } else if (parseInt(arrIng[0], 10)) {
          objIng = {
            count: parseInt(arrIng[0], 10),
            unit: '',
            ingredient: arrIng.slice(1).join(' ')
          };
        } else if (unitIndex === -1) {
          objIng = {
            count: 1,
            unit: '',
            ingredient: ingredient
          };
        }

        return objIng;
      });
      this.ingredients = newIngredients;
    }
  }]);

  return Recipe;
}();

exports["default"] = Recipe;
;