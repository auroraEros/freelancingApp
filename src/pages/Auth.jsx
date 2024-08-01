import AuthContainer from "../features/authentication/AuthContainer";
import OtpProvider from "../features/authentication/OtpContext";

function Auth() {
  return (
    <OtpProvider>
      <div className="bg-secondary-0 h-screen">
        <AuthContainer />
      </div>
    </OtpProvider>
  );
}

export default Auth;
