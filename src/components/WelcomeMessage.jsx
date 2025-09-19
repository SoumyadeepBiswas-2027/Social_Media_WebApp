export const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no Posts</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Fetch Posts from server!
      </button>
    </center>
  );
};
