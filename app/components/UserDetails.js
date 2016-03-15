var React = require('react');
var PropTypes = React.PropTypes
var user;

var headerStyle = {
  color: '#D85537',
  fontFamily: 'CovesBold'
};

function UserDetails (props) {

  user = props.user;
  return (
    <div>
      {!!props.score && <li className="list-group-item covesBold"><h3 style={headerStyle}>Score: {props.score}</h3></li>}
      <li className="list-group-item "> <img src={user.image_url.original} className="img-circle img-responsive center-block" width="150" height="150"/></li>
      {user.name && <li className="list-group-item covesBold">{user.name}</li>}
      <li className="list-group-item covesBold">Made {user.maker_of_count} Products</li>
      <li className="list-group-item covesBold">Posted {user.posts_count} Products</li>
      <li className="list-group-item covesBold">Has {user.followers_count} Followers</li>
      <li className="list-group-item covesBold">Created {user.collections_count} Collections</li>
      <li className="list-group-item covesBold">Upvoted {user.votes_count} Products</li>



      {user.website_url && <li className="list-group-item robotoMedium">Know more at <a className="covesBold" href={user.website_url}> {user.website_url}</a></li>}
    </div>
  )
}


module.exports = UserDetails;
