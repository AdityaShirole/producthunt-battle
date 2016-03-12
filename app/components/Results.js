var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function puke(object) {
  return <pre>{JSON.stringify(object,null, ' ')}</pre>
}

function StartOver() {
  return (
    <div className="col-sm-8 col-sm-offset-2">

      <div className="col-sm-12" style={styles.space}>
        <Link to='/playerOne'>
          <button type="button" className="buttonPH">
            Start Over
          </button>
        </Link>
      </div>

    </div>
  )
}

function Results(props) {

  if(props.isLoading) {

  } else {
    if (props.scores[0] === props.scores[1]) {
      return (
        <MainContainer>
          <h1>It is a tie!</h1>
          <StartOver />
        </MainContainer>
      );
    }
    console.log("playersInfo : ", props.playersInfo);
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
  }

  return props.isLoading === true
    ? <Loading text='One Moment'/>
    :
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} user={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} user={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
    <StartOver />
    </MainContainer>
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
