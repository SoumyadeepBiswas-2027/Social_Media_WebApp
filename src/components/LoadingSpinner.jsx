export const LoadingSpinner = () => {
  return (
    <h1>
      <div class="d-flex justify-content-center spinner">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </h1>
  );
};
