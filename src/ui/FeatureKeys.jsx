import FeatureBox from "./FeatureBox";
import {
  HiChartBar,
  HiCheckCircle,
  HiClipboardCheck,
  HiFolderAdd,
  HiShieldCheck,
  HiUserAdd,
} from "react-icons/hi";
function FeatureKeys() {
  return (
    <section className="py-16 bg-secondary-0">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-secondary-900">
          چه کارهایی می‌تونی انجام بدی؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureBox
            icon={HiUserAdd}
            title="ثبت‌نام با نقش دلخواه"
            desc="کارفرما یا فریلنسر، انتخاب با توست."
          />
          <FeatureBox
            icon={HiCheckCircle}
            title="تأیید توسط ادمین"
            desc="برای جلوگیری از هرزنامه و سوء‌استفاده"
          />
          <FeatureBox
            icon={HiFolderAdd}
            title="تعریف پروژه"
            desc="کارفرما پروژه ایجاد می‌کند."
          />
          <FeatureBox
            icon={HiClipboardCheck}
            title="درخواست فریلنسر"
            desc="فریلنسر پروژه‌های باز رو می‌بینه و پیشنهاد می‌ده."
          />
          <FeatureBox
            icon={HiChartBar}
            title="داشبوردهای مجزا"
            desc="هر نقش، داشبورد خاص خودش رو داره."
          />
          <FeatureBox
            icon={HiShieldCheck}
            title="امنیت و کنترل"
            desc="همه چیز با نظارت ادمین مدیریت می‌شه."
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureKeys;
