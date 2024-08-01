import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toPersianNumbers } from "../utils/toPersianNumbers";

export default function FadingMessage({ text }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000); // بعد از 10 ثانیه، مخفی میشه
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="fixed top-1/5 left-1/5 bg-primary-100 text-primary-900 px-6 py-3 rounded-xl shadow-md text-sm sm:text-base z-50"
    >
      برای ورود به عنوان ادمین، شماره موبایل{" "}
      <strong>{toPersianNumbers(0)}{toPersianNumbers(9121234567)}</strong> را وارد کنید.
    </motion.div>
  );
}
