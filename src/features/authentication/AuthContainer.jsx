import { useOtpContext } from "./OtpContext";
import CheckOtpForm from "./CheckOtpForm";
import SendOTPForm from "./SendOTPForm";

function AuthContainer() {
  const { step } = useOtpContext();
  return (
    <div className="container sm:max-w-screen-sm">
      {step === 1 ? <SendOTPForm /> : <CheckOtpForm />}
    </div>
  );
}

export default AuthContainer;
