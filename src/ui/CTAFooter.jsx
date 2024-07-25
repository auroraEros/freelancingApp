import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Button from "./Button";

function CTAFooter() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <section className="py-16 bg-primary-100 dark:bg-secondary-200 text-secondary-0 text-center">
      <h2 className="text-3xl font-bold mb-4 text-secondary-900">
        به عنوان فریلنسر یا کارفرما ثبت‌نام کن
      </h2>
      <p className="mb-6 text-secondary-700">فرصت‌های جدید منتظر تو هستن.</p>
         <Button
              className="px-6 py-2 text-lg rounded-xl text-white"
              onClick={() => navigate(user?.role?.toLowerCase() ?? "auth")}
            >
        شروع کنید
      </Button>
    </section>
  );
}

export default CTAFooter;
