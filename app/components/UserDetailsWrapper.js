var React = require('react');
var PropTypes = React.PropTypes;

var headerStyle = {
  color: 'white',
  fontFamily: 'CovesBold'
};

function UserDetailsWrapper (props) {
    return (
      <div className="col-sm-6">
        <h2 style={headerStyle}>{props.header}</h2>
        {props.children}
      </div>
    );
}

module.exports = UserDetailsWrapper;
