var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PropTypes = React.PropTypes;

var headerStyle = {
  color: 'white'

}

function Prompt(props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1 className="covesBold whiteText headerText" style={headerStyle}>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>

            <div className="form-group">
              <input
                className="form-control"
                placeholder="Product Hunt Username"
                type="text"
                onChange={props.onUpdateUser}
                value={props.username}/>
            </div>

            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="buttonPH"
                type="submit">
                  Continue
                </button>
            </div>

          </form>
        </div>
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}



module.exports = Prompt;
