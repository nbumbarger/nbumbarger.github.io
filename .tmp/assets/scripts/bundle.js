(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/actions/index.js":[function(require,module,exports){
'use strict';

},{}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header-nav-button.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderNavButton = function HeaderNavButton(props) {
  return _react2.default.createElement(
    'li',
    { className: 'header-nav-button' },
    _react2.default.createElement(
      'a',
      { href: props.item.url, target: '_blank' },
      _react2.default.createElement('div', { className: (0, _classnames2.default)('nav-button-icon', props.item.iconClass) }),
      _react2.default.createElement(
        'div',
        { className: 'nav-button-text' },
        props.item.name
      )
    )
  );
};

HeaderNavButton.propTypes = {
  item: _propTypes2.default.object
};

exports.default = HeaderNavButton;

},{"classnames":"classnames","prop-types":"prop-types","react":"react"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header-nav-hint.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderNavHint = function HeaderNavHint(props) {
  return props.navActive ? _react2.default.createElement(
    'ul',
    { className: (0, _classnames2.default)('header-nav-hint nav-cancel', { hidden: !props.navActive }) },
    _react2.default.createElement('li', { className: 'collecticon-circle-xmark' })
  ) : _react2.default.createElement(
    'ul',
    { className: (0, _classnames2.default)('header-nav-hint nav-activate', { hidden: !props.navHintActive && !props.mobileWidth }) },
    _react2.default.createElement('li', { className: 'collecticon-chevron-up' }),
    _react2.default.createElement('li', { className: 'collecticon-chevron-up' }),
    _react2.default.createElement('li', { className: 'collecticon-chevron-up' }),
    _react2.default.createElement('li', { className: 'collecticon-chevron-up' }),
    _react2.default.createElement('li', { className: 'collecticon-chevron-up' }),
    _react2.default.createElement('li', { className: 'collecticon-chevron-up' })
  );
};

HeaderNavHint.propTypes = {
  navHintActive: _propTypes2.default.bool,
  navActive: _propTypes2.default.bool,
  mobileWidth: _propTypes2.default.bool
};

exports.default = HeaderNavHint;

},{"classnames":"classnames","prop-types":"prop-types","react":"react"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header-nav.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _headerNavButton = require('./header-nav-button');

var _headerNavButton2 = _interopRequireDefault(_headerNavButton);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderNav = function HeaderNav(props) {
  return _react2.default.createElement(
    _reactMotion.Motion,
    { className: 'header-nav-container', defaultStyle: { x: -10, o: 0 }, style: {
        x: (0, _reactMotion.spring)(props.navActive ? 1.5 : -75, { stiffness: 60, damping: 15 }),
        o: (0, _reactMotion.spring)(props.navActive ? 1 : 0, { stiffness: 60, damping: 20 })
      } },
    function (interpolation) {
      return _react2.default.createElement(
        'nav',
        { className: 'header-nav', style: { left: interpolation.x + 'rem', opacity: interpolation.o } },
        _react2.default.createElement(
          'ul',
          null,
          _constants.navLinks.map(function (item) {
            return _react2.default.createElement(_headerNavButton2.default, { key: 'nav-button-' + item.name, item: item });
          })
        )
      );
    }
  );
};

HeaderNav.propTypes = {
  navActive: _propTypes2.default.bool
};

exports.default = HeaderNav;

},{"../../constants":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/constants.js","./header-nav-button":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header-nav-button.js","prop-types":"prop-types","react":"react","react-motion":"react-motion"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _headerNavHint = require('./header-nav-hint');

var _headerNavHint2 = _interopRequireDefault(_headerNavHint);

var _headerNav = require('./header-nav');

var _headerNav2 = _interopRequireDefault(_headerNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      mobileWidth: false,
      navHintActive: true,
      navActive: false
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.handleHeaderMouseOver = _this.handleHeaderMouseOver.bind(_this);
    _this.handleHeaderMouseOut = _this.handleHeaderMouseOut.bind(_this);
    _this.handleHeaderClick = _this.handleHeaderClick.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({
        mobileWidth: window.innerWidth <= 543
      });
    }
  }, {
    key: 'handleHeaderMouseOver',
    value: function handleHeaderMouseOver() {
      this.setState({ navHintActive: true });
    }
  }, {
    key: 'handleHeaderMouseOut',
    value: function handleHeaderMouseOut() {
      this.setState({ navHintActive: false });
    }
  }, {
    key: 'handleHeaderClick',
    value: function handleHeaderClick() {
      this.setState({ navActive: !this.state.navActive });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var navOffsetY = this.state.mobileWidth ? 5 : 4;
      return _react2.default.createElement(
        'div',
        { className: 'header-container' },
        _react2.default.createElement(
          _reactMotion.Motion,
          { defaultStyle: { y: 2 }, style: { y: (0, _reactMotion.spring)(this.state.navActive ? navOffsetY : 2, { stiffness: 100, damping: 20 }) } },
          function (interpolation) {
            return _react2.default.createElement(
              'header',
              {
                className: 'header',
                style: { bottom: interpolation.y + 'rem' },
                onMouseOver: _this2.handleHeaderMouseOver,
                onMouseOut: _this2.handleHeaderMouseOut,
                onClick: _this2.handleHeaderClick
              },
              _react2.default.createElement(
                'div',
                { className: 'header-text' },
                _react2.default.createElement(
                  _reactMotion.Motion,
                  { defaultStyle: { x1: -25, o1: 0, x2: -50, o2: 0 }, style: {
                      x1: (0, _reactMotion.spring)(0, { stiffness: 150, damping: 25 }),
                      o1: (0, _reactMotion.spring)(1, { stiffness: 30, damping: 15 }),
                      x2: (0, _reactMotion.spring)(0, { stiffness: 120, damping: 20 }),
                      o2: (0, _reactMotion.spring)(1, { stiffness: 20, damping: 20 })
                    } },
                  function (interpolation) {
                    return _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'div',
                        { style: {
                            marginLeft: interpolation.x1 + 'rem',
                            opacity: interpolation.o1 } },
                        _react2.default.createElement(
                          'h1',
                          null,
                          'Nick '
                        ),
                        _react2.default.createElement(
                          'h1',
                          null,
                          'B'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'description', style: {
                            marginLeft: interpolation.x2 + 'rem',
                            opacity: interpolation.o2 } },
                        _react2.default.createElement(
                          'h2',
                          null,
                          _react2.default.createElement(
                            'span',
                            { className: 'description-part1' },
                            'Web and Geospatial '
                          ),
                          _react2.default.createElement(
                            'span',
                            { className: 'description-part2' },
                            'Developer'
                          )
                        )
                      )
                    );
                  }
                )
              ),
              _react2.default.createElement(_headerNavHint2.default, {
                navHintActive: _this2.state.navHintActive,
                navActive: _this2.state.navActive,
                mobileWidth: _this2.state.mobileWidth })
            );
          }
        ),
        _react2.default.createElement(_headerNav2.default, {
          navActive: this.state.navActive })
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

},{"./header-nav":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header-nav.js","./header-nav-hint":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header-nav-hint.js","react":"react","react-motion":"react-motion"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/home-background.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _constants = require('../constants');

var _map = require('../utils/map');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeBackground = function (_Component) {
  _inherits(HomeBackground, _Component);

  function HomeBackground(props) {
    _classCallCheck(this, HomeBackground);

    var _this = _possibleConstructorReturn(this, (HomeBackground.__proto__ || Object.getPrototypeOf(HomeBackground)).call(this, props));

    _this.state = {
      poiIndex: Math.floor(Math.random() * _constants.mapPOIs.length)
    };
    return _this;
  }

  _createClass(HomeBackground, [{
    key: 'initializeMap',
    value: function initializeMap() {
      var _this2 = this;

      this.props.mapboxgl.accessToken = _config2.default.accessToken;
      var map = new this.props.mapboxgl.Map({
        container: _constants.mapSettings.container,
        style: _constants.mapSettings.style,
        center: _constants.mapPOIs[this.state.poiIndex].coords,
        zoom: _constants.mapSettings.zoom,
        pitch: _constants.mapSettings.pitch
      });
      map.on('load', function () {
        _this2.mapZoomTo(map);
      });
      map.on('moveend', function () {
        _this2.mapZoomTo(map);
      });
    }
  }, {
    key: 'mapZoomTo',
    value: function mapZoomTo(map) {
      // Set bearing to slowly rotate transition view towards next point
      var newIndex = Math.floor(Math.random() * _constants.mapPOIs.length);
      var startCoord = _constants.mapPOIs[this.state.poiIndex].coords;
      var endCoord = _constants.mapPOIs[newIndex].coords;
      var bearing = (0, _map.getBearing)(startCoord, endCoord);

      map.flyTo({
        center: endCoord,
        zoom: _constants.mapSettings.zoom,
        bearing: bearing,
        pitch: _constants.mapSettings.pitch,
        speed: _constants.mapSettings.speed,
        curve: _constants.mapSettings.curve,
        easing: function easing(t) {
          return t;
        }
      });

      this.setState({ poiIndex: newIndex });
    }
  }, {
    key: 'addStatic',
    value: function addStatic() {
      var staticOverlay = _constants.staticSettings.staticOverlay,
          scaleFactor = _constants.staticSettings.scaleFactor,
          FPS = _constants.staticSettings.FPS,
          scanSpeed = _constants.staticSettings.scanSpeed,
          SAMPLE_COUNT = _constants.staticSettings.SAMPLE_COUNT;
      var scanSize = _constants.staticSettings.scanSize,
          scanOffsetY = _constants.staticSettings.scanOffsetY;


      var canvas = document.querySelector('#' + staticOverlay);
      var context = canvas.getContext('2d');

      var samples = [];
      var sampleIndex = 0;

      window.onresize = function () {
        canvas.width = canvas.offsetWidth / scaleFactor;
        canvas.height = canvas.width / (canvas.offsetWidth / canvas.offsetHeight);
        scanSize = canvas.offsetHeight / scaleFactor / 3;

        samples = [];
        for (var i = 0; i < SAMPLE_COUNT; i++) {
          samples.push(generateRandomSample(context, canvas.width, canvas.height));
        }
      };

      var interpolate = function interpolate(x, x0, y0, x1, y1) {
        return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
      };

      var generateRandomSample = function generateRandomSample(context, w, h) {
        var intensity = [];
        var factor = h / 50;

        var intensityCurve = [];
        for (var i = 0; i < Math.floor(h / factor) + factor; i++) {
          intensityCurve.push(Math.floor(Math.random() * 15));
        }

        for (var _i = 0; _i < h; _i++) {
          var value = interpolate(_i / factor, Math.floor(_i / factor), intensityCurve[Math.floor(_i / factor)], Math.floor(_i / factor) + 1, intensityCurve[Math.floor(_i / factor) + 1]);
          intensity.push(value);
        }

        var imageData = context.createImageData(w, h);
        for (var _i2 = 0; _i2 < w * h; _i2++) {
          var k = _i2 * 4;
          var color = Math.floor(36 * Math.random());

          color += intensity[Math.floor(_i2 / w)];
          imageData.data[k] = imageData.data[k + 1] = imageData.data[k + 2] = color;
          imageData.data[k + 3] = 255;
        }
        return imageData;
      };

      var render = function render() {
        context.putImageData(samples[Math.floor(sampleIndex)], 0, 0);

        sampleIndex += 30 / FPS;
        if (sampleIndex >= samples.length) sampleIndex = 0;

        var grd = context.createLinearGradient(-1, scanOffsetY, 0, scanSize + scanOffsetY);

        grd.addColorStop(0, 'rgba(255,255,255,0)');
        grd.addColorStop(0.1, 'rgba(255,255,255,0)');
        grd.addColorStop(0.2, 'rgba(255,255,255,0.2)');
        grd.addColorStop(0.45, 'rgba(255,255,255,0.1)');
        grd.addColorStop(0.5, 'rgba(255,255,255,0.25)');
        grd.addColorStop(0.55, 'rgba(255,255,255,0.2)');
        grd.addColorStop(0.6, 'rgba(255,255,255,0.15)');
        grd.addColorStop(1, 'rgba(255,255,255,0)');

        context.fillStyle = grd;
        context.fillRect(0, scanOffsetY, canvas.width, scanSize + scanOffsetY);
        context.globalCompositeOperation = 'lighten';

        scanOffsetY += canvas.height / (FPS * scanSpeed);
        if (scanOffsetY > canvas.height) scanOffsetY = -(scanSize / 2);

        window.setTimeout(function () {
          window.requestAnimationFrame(render);
        }, 1000 / FPS);
      };
      window.onresize();
      window.requestAnimationFrame(render);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initializeMap();
      this.addStatic();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home-background' },
        _react2.default.createElement('canvas', { id: 'static-overlay' }),
        _react2.default.createElement('div', { id: 'map' })
      );
    }
  }]);

  return HomeBackground;
}(_react.Component);

HomeBackground.propTypes = {
  mapboxgl: _propTypes2.default.object
};

exports.default = HomeBackground;

},{"../config":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config.js","../constants":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/constants.js","../utils/map":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/utils/map.js","prop-types":"prop-types","react":"react"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config.js":[function(require,module,exports){
(function (process){
'use strict';

var _lodash = require('lodash.defaultsdeep');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * App configuration.
 *
 * Uses settings in config/production.js, with any properties set by
 * config/staging.js or config/local.js overriding them depending upon the
 * environment.
 *
 * This file should not be modified.  Instead, modify one of:
 *
 *  - config/production.js
 *      Production settings (base).
 *  - config/staging.js
 *      Overrides to production if ENV is staging.
 *  - config/local.js
 *      Overrides if local.js exists.
 *      This last file is gitignored, so you can safely change it without
 *      polluting the repo.
 */

var configurations = {
  local: require('./config/local.js'),
  staging: require('./config/staging.js'),
  production: require('./config/production.js')
};
var config = configurations.local || {};

if (process.env.DS_ENV === 'staging') {
  (0, _lodash2.default)(config, configurations.staging);
}
(0, _lodash2.default)(config, configurations.production);

module.exports = config;

}).call(this,require('_process'))

},{"./config/local.js":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config/local.js","./config/production.js":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config/production.js","./config/staging.js":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config/staging.js","_process":"/Users/nick/repos/personal/nbumbarger.github.io/node_modules/process/browser.js","lodash.defaultsdeep":"lodash.defaultsdeep"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config/local.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  environment: 'development'
};

},{}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config/production.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  accessToken: 'pk.eyJ1IjoibmJ1bWJhcmciLCJhIjoiWG1NN1BlYyJ9.nbifRhdBcN1K-mdtwwi0eQ',
  environment: 'production',
  consoleMessage: 'production'
};

},{}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config/staging.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  accessToken: 'pk.eyJ1IjoibmJ1bWJhcmciLCJhIjoiWG1NN1BlYyJ9.nbifRhdBcN1K-mdtwwi0eQ',
  environment: 'staging',
  consoleMessage: 'staging'
};

},{}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/constants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapSettings = exports.mapSettings = {
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  zoom: 19,
  pitch: 60,
  speed: 0.15,
  curve: 0.75
};

var staticSettings = exports.staticSettings = {
  staticOverlay: 'static-overlay',
  scaleFactor: 3,
  scanOffsetY: 50,
  scanSize: 0,
  FPS: 23,
  scanSpeed: 6,
  SAMPLE_COUNT: 7
};

var mapPOIs = exports.mapPOIs = [{ name: 'Dupont Circle', coords: [-77.04227, 38.910337] }, { name: 'National Geographic Museum', coords: [-77.037978, 38.905194] }, { name: 'Foggy Bottom', coords: [-77.053342, 38.900218] }, { name: 'Georgetown', coords: [-77.066045, 38.91027] }, { name: 'United States Naval Observatory', coords: [-77.066174, 38.922324] }, { name: 'Smithsonian National Zoological Park', coords: [-77.049394, 38.931038] }, { name: 'Columbia Heights', coords: [-77.03021, 38.928968] }, { name: 'Brookland', coords: [-76.982574, 38.929102] }, { name: 'Navy Yard', coords: [-76.997852, 38.877136] }, { name: 'American University Park', coords: [-77.089691, 38.942588] }, { name: 'Chevy Chase', coords: [-77.066689, 38.964948] }, { name: 'Rock Creek Golf Course', coords: [-77.038794, 38.965682] }, { name: 'Sherman Circle Northwest', coords: [-77.021542, 38.947328] }, { name: 'Tacoma', coords: [-77.019997, 38.972756] }, { name: 'National Mall', coords: [-77.023001, 38.88963] }, { name: 'Lincoln Memorial', coords: [-77.050209, 38.889296] }, { name: 'Hill East', coords: [-76.979871, 38.884853] }];

var navLinks = exports.navLinks = [{ name: 'LinkedIn', iconClass: 'collecticon-linkedin', url: 'https://www.linkedin.com/in/nbumbarger/' }, { name: 'Github', iconClass: 'collecticon-github', url: 'https://github.com/nbumbarger/' }, { name: 'Twitter', iconClass: 'collecticon-twitter', url: 'https://twitter.com/Sir_Mapsalot' }, { name: 'Email', iconClass: 'collecticon-envelope', url: 'mailto:nick@nickbumbarger.com' }];

},{}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/main.js":[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxLogger = require('redux-logger');

var _reactRouterDom = require('react-router-dom');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _home = require('./views/home');

var _home2 = _interopRequireDefault(_home);

var _uhoh = require('./views/uhoh');

var _uhoh2 = _interopRequireDefault(_uhoh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger.createLogger)({
  level: 'info',
  collapsed: true,
  predicate: function predicate(getState, action) {
    return _config2.default.environment !== 'production';
  }
});

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(logger));

// Components


(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _uhoh2.default })
    )
  )
), document.querySelector('#app-container'));

},{"./config":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/config.js","./reducers":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/reducers/index.js","./views/home":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/views/home.js","./views/uhoh":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/views/uhoh.js","react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router-dom":"react-router-dom","redux":"redux","redux-logger":"redux-logger"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/reducers/home.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

require('../actions');

var initialState = exports.initialState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  state = Object.assign({}, state);
  switch (action.type) {}
  return state;
};

},{"../actions":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/actions/index.js"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/reducers/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = require('redux');

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = {
  home: _home2.default
};
exports.default = (0, _redux.combineReducers)(Object.assign({}, reducers, {}));

},{"./home":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/reducers/home.js","redux":"redux"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/utils/map.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBearing = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _bearing = require('@turf/bearing');

var _bearing2 = _interopRequireDefault(_bearing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Calculate bearing from one point to another
var getBearing = exports.getBearing = function getBearing(coord1, coord2) {
  var _map = [coord1, coord2].map(function (coord) {
    return {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [coord[0], coord[1]]
      }
    };
  }),
      _map2 = _slicedToArray(_map, 2),
      point1 = _map2[0],
      point2 = _map2[1];

  return (0, _bearing2.default)(point1, point2);
};

},{"@turf/bearing":"@turf/bearing"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/views/home.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mapboxGl = require('mapbox-gl');

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

var _homeBackground = require('../components/home-background');

var _homeBackground2 = _interopRequireDefault(_homeBackground);

var _header = require('../components/header/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = exports.Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page__home' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_homeBackground2.default, { mapboxgl: _mapboxGl2.default })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

},{"../components/header/header":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/header/header.js","../components/home-background":"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/components/home-background.js","mapbox-gl":"mapbox-gl","react":"react"}],"/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/views/uhoh.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UhOh = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UhOh = exports.UhOh = function (_Component) {
  _inherits(UhOh, _Component);

  function UhOh() {
    _classCallCheck(this, UhOh);

    return _possibleConstructorReturn(this, (UhOh.__proto__ || Object.getPrototypeOf(UhOh)).apply(this, arguments));
  }

  _createClass(UhOh, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page__uhoh' },
        _react2.default.createElement(
          'h1',
          null,
          '404'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Something is missing...'
        )
      );
    }
  }]);

  return UhOh;
}(_react.Component);

exports.default = UhOh;

},{"react":"react"}],"/Users/nick/repos/personal/nbumbarger.github.io/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},["/Users/nick/repos/personal/nbumbarger.github.io/app/assets/scripts/main.js"])

//# sourceMappingURL=bundle.js.map
