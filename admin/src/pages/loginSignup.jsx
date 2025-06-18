import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        login
      </button>
    </>
  );
};

export default LoginSignup;
