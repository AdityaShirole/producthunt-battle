var React = require('react');

var githubHelpers = require('../utils/githubHelpers');

var Prompt = require('../components/Prompt');
var PromptContainer = React.createClass({
  contextTypes: {
      router : React.PropTypes.object.isRequired
  },

  getInitialState: function() {
      return {
        username: ''
      }
  },

  handleSubmitUser: function(e) {
    e.preventDefault();

    var username = this.state.username;
    githubHelpers.getHunterInfo('aditya_shirole')
      .then(function(hunter) {
          console.log('Hunter',hunter.data.user);
      });

    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      //go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })

    } else {
      //go to /playerTwo/:playerOne
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },

  handleUpdateUser: function(e) {
    this.setState({
      username : e.target.value
    });
  },

  render: function() {

    return(
      <Prompt
        onSubmitUser= {this.handleSubmitUser}
        onUpdateUser= {this.handleUpdateUser}
        header= {this.props.route.header}
        username= {this.state.username} />
    );
  }
});

module.exports = PromptContainer;
