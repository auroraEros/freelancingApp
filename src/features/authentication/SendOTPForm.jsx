import TextField from "../../ui/TextField";
import SubmitButton from "../../ui/SubmitButton";
import Loader from "../../ui/Loader";
import { useOtpContext } from "./OtpContext";

function SendOTPForm() {
  const { phoneNumber, setPhonNumber, sendOtp, isGettingOtp } = useOtpContext();
  return (
    <div className="pt-20">
      <form className="space-y-10" onSubmit={sendOtp}>
        <TextField
          label="شماره موبایل خود را وارد کنید:"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhonNumber(e.target.value)}
        />
        <div>
          {isGettingOtp ? <Loader /> : <SubmitButton>تایید</SubmitButton>}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
