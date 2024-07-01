import classes from './errorMessage.module.css'

export const ErrorMessage = ({ error }) => {
  return (
    <div className={classes["login-error-area"]}>
      <b>There was an error</b>
      {error.map((err) => (
        <p>{err}</p>
      ))}
    </div>
  );
};
