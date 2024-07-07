import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import OTPInput from "react-otp-input";

import { useCheckOtp } from "../../hooks/useCheckOtp";
import { useOtpContext } from "./OtpContext";
import Loader from "../../ui/Loader";
import SubmitButton from "../../ui/SubmitButton";


function CheckOtpForm() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = useState(90);
  const { phoneNumber, sendOtp, setStep } = useOtpContext();
  const { isCheckingOtp, checkingOtp } = useCheckOtp();

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  async function checkOtpHandler(e) {
    e.preventDefault();
    try {
      const { message, user } = await checkingOtp({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        navigate("/");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div className="pt-10">
      <div className="space-y-4 mb-4">
        <p className="text-success">
          کد تایید برای شماره {phoneNumber} ارسال شد.
        </p>
        <button
          className="text-secondary-400 flex items-center gap-x-3 text-sm"
          onClick={() => setStep(1)}
        >
          <span>اصلاح شماره همراه</span>
          <CiEdit className="w-4 h-4" />
        </button>
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isCheckingOtp ? <Loader /> : <SubmitButton>تایید</SubmitButton>}
        </div>
      </form>
      <div className="mt-4 ">
        {time > 0 ? (
          <p className="text-secondary-500">{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button
            className="text-primary-800 hover:scale-105 transition-all duration-300 "
            onClick={sendOtp}
          >
            ارسال مجدد کد
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckOtpForm;
