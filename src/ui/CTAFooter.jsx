import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function CTAFooter() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <section className="py-16 bg-primary-600 text-secondary-0 text-center">
      <h2 className="text-3xl font-bold mb-4">
        به عنوان فریلنسر یا کارفرما ثبت‌نام کن
      </h2>
      <p className="mb-6">فرصت‌های جدید منتظر تو هستن.</p>
      <button
        className="bg-secondary-0 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-100 transition-all"
        onClick={() => navigate(user?.role?.toLowerCase() ?? "auth")}
      >
        شروع کنید
      </button>
    </section>
  );
}

export default CTAFooter;
