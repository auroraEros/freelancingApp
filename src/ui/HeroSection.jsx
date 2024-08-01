import { motion } from "framer-motion";

import Button from "./Button";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuthorize } from "../hooks/useAuthorize";

function HeroSection() {
  const navigate = useNavigate();
  const { user, isVerified } = useAuthorize();
  const navigateUrl = isVerified ? user?.role?.toLowerCase() : "auth";

  return (
    <section className="w-full px-6 py-20 bg-primary-100 dark:bg-secondary-200 relative">
      <ThemeToggle className="absolute left-2 top-2" />
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row bg-transparent items-center gap-12">
        <div className="flex-1 text-center md:text-right space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl text-secondary-900 font-bold leading-relaxed drop-shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            اتصال سریع فریلنسرها و کارفرماها در{" "}
            <span className="text-primary-900 dark:text-primary-400">
              ورکستان
            </span>
          </motion.h1>
          <p className="text-secondary-700  text-lg">
            پروژه‌ات رو ثبت کن یا بین پروژه‌ها بگرد و درخواست بده. ساده، سریع و
            حرفه‌ای.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button
              className="px-6 py-2 text-lg rounded-xl text-white"
              onClick={() => navigate(navigateUrl)}
            >
              ثبت پروژه
            </Button>
          </div>
        </div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/freelancer.png"
            alt="Freelancer platform illustration"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
