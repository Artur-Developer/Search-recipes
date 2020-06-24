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

var Search =
/*#__PURE__*/
function () {
  function Search(query) {
    _classCallCheck(this, Search);

    this.query = query;
  }

  _createClass(Search, [{
    key: "getResults",
    value: function getResults() {
      var proxy, url, res;
      return regeneratorRuntime.async(function getResults$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              proxy = 'https://cors-anywhere.herokuapp.com/';
              url = "".concat(proxy, "https://forkify-api.herokuapp.com/api/search?q=").concat(this.query);
              _context.prev = 2;
              _context.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])("".concat(url)));

            case 5:
              res = _context.sent;
              this.result = res.data.recipes;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0); //throw new Error(e);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[2, 9]]);
    }
  }]);

  return Search;
}();

exports["default"] = Search;