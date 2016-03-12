var React = require('react');
var PropTypes = React.PropTypes
var user;
function UserDetails (props) {
  
  user = props.user;
  return (
    <div>
      {!!props.score && <li className="list-group-item"><h3>Score: {props.score}</h3></li>}
      <li className="list-group-item"> <img src={user.image_url.original} className="img-circle img-responsive center-block" width="200" height="200"/></li>
      {user.name && <li className="list-group-item robotoMedium">{user.name}</li>}
      <li className="list-group-item robotoMedium">Made {user.maker_of_count} Products</li>
      <li className="list-group-item robotoMedium">Posted {user.posts_count} Products</li>
      <li className="list-group-item robotoMedium">Has {user.followers_count} Followers</li>
      <li className="list-group-item robotoMedium">Created {user.collections_count} Collections</li>
      <li className="list-group-item robotoMedium">Upvoted {user.votes_count} Products</li>



      {user.website_url && <li className="list-group-item robotoMedium">Know more at <a href={user.website_url}> {user.website_url}</a></li>}
    </div>
  )
}


module.exports = UserDetails;
