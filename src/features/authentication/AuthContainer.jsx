import { useOtpContext } from "./OtpContext";
import CheckOtpForm from "./CheckOtpForm";
import SendOTPForm from "./SendOTPForm";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const { step } = useOtpContext();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate("/", { replace: true });
  }, [navigate,user]);
  return (
    <div className="container sm:max-w-screen-sm">
      {step === 1 ? <SendOTPForm /> : <CheckOtpForm />}
    </div>
  );
}

export default AuthContainer;
