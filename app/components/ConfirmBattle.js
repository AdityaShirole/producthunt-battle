var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function puke(object) {
  return <pre>{JSON.stringify(object,null, ' ')}</pre>
}

function ConfirmBattle(props) {

  if (props.isLoading) {

  } else {
    console.log("PLAYER IN PROPS",props.playersInfo[0]);
  }



  return props.isLoading === true
    ? <Loading speed={250} text='Waiting'/>
    : <MainContainer>
        <h2 className="robotoMedium">Confirm Hunters</h2>

        <div className="col-sm-8 col-sm-offset-2">

          <UserDetailsWrapper header="Hunter One">
            <UserDetails user={props.playersInfo[0]} />
          </UserDetailsWrapper>

          <UserDetailsWrapper header="Hunter Two">
            <UserDetails user={props.playersInfo[1]} />
          </UserDetailsWrapper>

        </div>

        <div className="col-sm-8 col-sm-offset-2">

          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="buttonPH" onClick={props.onInitiateBattle}>
              Initiate Battle
            </button>
          </div>

          <br></br>

          <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne'>
              <button type="button" className="buttonPH">
                Reselect Players
              </button>
            </Link>
          </div>

        </div>

      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
