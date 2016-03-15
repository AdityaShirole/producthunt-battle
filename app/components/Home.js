var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MainContainer = require('../containers/MainContainer');
var backgroundStyle = {
    backgroundColor: '#D85537'
}

var Home = React.createClass({

  render: function() {
    return(
      <div style={backgroundStyle}>
        <MainContainer style={backgroundStyle}>
          <img src="app/kitty_edit.png" width="400px" height="400px" className="img-responsive center-block" style={backgroundStyle}></img>

          <p className='lead whiteText robotoMedium'>Hunter vs Hunter</p>
          <p className='lead whiteText robotoMedium'>Find out the top Product Hunter</p>
          <Link to='playerOne'>
            <button type="button" className="buttonPH">Choose Hunters</button>
          </Link>
        </MainContainer>
      </div>
    );
  }
});

module.exports = Home;
