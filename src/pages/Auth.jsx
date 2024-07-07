import AuthContainer from "../features/authentication/AuthContainer";
import OtpProvider from "../features/authentication/OtpContext";

function Auth() {
  return (
    <OtpProvider>
      <AuthContainer />
    </OtpProvider>
  );
}

export default Auth;
