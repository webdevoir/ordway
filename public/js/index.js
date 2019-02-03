var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);

  function App() {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      seat: [
      'Front1', 'Front2', 'Front3',
      'Middle1', 'Middle2', 'Middle3',
      'Back1', 'Back2', 'Back3'],

      seatAvailable: [
      'Front1', 'Front2', 'Front3',
      'Middle1', 'Middle2', 'Middle3',
      'Back1', 'Back2', 'Back3'],

      seatReserved: [] };return _this;

  }_createClass(App, [{ key: 'onClickData', value: function onClickData(

    seat) {
      if (this.state.seatReserved.indexOf(seat) > -1) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(function (res) {return res != seat;}) });

      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(function (res) {return res != seat;}) });

      }
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('h1', null, 'Ordway Labs Best Seat Available with React'),
          React.createElement(DrawGrid, {
            seat: this.state.seat,
            available: this.state.seatAvailable,
            reserved: this.state.seatReserved,
            onClickData: this.onClickData.bind(this) })));



    } }]);return App;}(React.Component);var


DrawGrid = function (_React$Component2) {_inherits(DrawGrid, _React$Component2);function DrawGrid() {_classCallCheck(this, DrawGrid);return _possibleConstructorReturn(this, (DrawGrid.__proto__ || Object.getPrototypeOf(DrawGrid)).apply(this, arguments));}_createClass(DrawGrid, [{ key: 'render', value: function render()
    {var _this3 = this;
      return (
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null),
          React.createElement('table', { className: 'grid' },
            React.createElement('tbody', null,
              React.createElement('tr', null,
                this.props.seat.map(function (row) {return (
                    React.createElement('td', {
                        className: _this3.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available',
                        key: row, onClick: function onClick(e) {return _this3.onClickSeat(row);} }, row, ' '));})))),




          React.createElement(AvailableList, { available: this.props.available }),
          React.createElement(ReservedList, { reserved: this.props.reserved })));


    } }, { key: 'onClickSeat', value: function onClickSeat(

    seat) {
      this.props.onClickData(seat);
    } }]);return DrawGrid;}(React.Component);var


AvailableList = function (_React$Component3) {_inherits(AvailableList, _React$Component3);function AvailableList() {_classCallCheck(this, AvailableList);return _possibleConstructorReturn(this, (AvailableList.__proto__ || Object.getPrototypeOf(AvailableList)).apply(this, arguments));}_createClass(AvailableList, [{ key: 'render', value: function render()
    {
      var seatCount = this.props.available.length;
      return (
        React.createElement('div', { className: 'left' },
          React.createElement('h4', null, 'Available Seats: (', seatCount == 0 ? 'No seats available' : seatCount, ')'),
          React.createElement('ul', null,
            this.props.available.map(function (res) {return React.createElement('li', { key: res }, res);}))));



    } }]);return AvailableList;}(React.Component);var


ReservedList = function (_React$Component4) {_inherits(ReservedList, _React$Component4);function ReservedList() {_classCallCheck(this, ReservedList);return _possibleConstructorReturn(this, (ReservedList.__proto__ || Object.getPrototypeOf(ReservedList)).apply(this, arguments));}_createClass(ReservedList, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'right' },
          React.createElement('h4', null, 'Reserved Seats: (', this.props.reserved.length, ')'),
          React.createElement('ul', null,
            this.props.reserved.map(function (res) {return React.createElement('li', { key: res }, res);}))));



    } }]);return ReservedList;}(React.Component);



ReactDOM.render(React.createElement(App, { name: 'Rachelle' }), document.getElementById('app'));