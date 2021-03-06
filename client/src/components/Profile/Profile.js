import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, nickname } = user;


  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>Name:</h2>
          <p className="lead text-muted">{name}</p>
        </div>
        <div className="col-md text-center text-md-left">
          <h2>Email:</h2>
          <p className="lead text-muted">{email}</p>
        </div>
        <div className="col-md text-center text-md-left">
          <h2>Nickname:</h2>
          <p className="lead text-muted">{nickname}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
