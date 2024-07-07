import { createContext, useContext, useState } from "react";
import { useGetOtp } from "../../hooks/useGetOtp";
import {toast} from "react-hot-toast"

const OtpContext = new createContext();

export default function OtpProvider({ children }) {
  const [phoneNumber, setPhonNumber] = useState("");
  const [step, setStep] = useState(1);
  const { gettingOtp,isGettingOtp } = useGetOtp();
  async function sendOtp(e) {
    e.preventDefault();
    try {
      const { message } = await gettingOtp({ phoneNumber });
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <OtpContext.Provider
      value={{ step, setStep, phoneNumber, setPhonNumber, sendOtp ,isGettingOtp}}
    >
      {children}
    </OtpContext.Provider>
  );
}

export function useOtpContext() {
  const context = useContext(OtpContext);
  if (!context) throw new Error("useOtpContext was used outside of OtpContext");
  return context;
}
