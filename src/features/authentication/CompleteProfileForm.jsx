import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import SubmitButton from "../../ui/SubmitButton";
import { useCompleteProfile } from "./useCompleteProfile";
import RadioInputGroup from "../../ui/RadioInputGroup";
import Loader from "../../ui/Loader";
import RHFTextField from "../../ui/RHFTextField";

function CompleteProfileForm() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const { isCompletingProfile, completingProfile } = useCompleteProfile();

  async function onSubmit(data) {
    try {
      const { message, user } = await completingProfile(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "نام و نام خانوادگی  ضروری است",
          }}
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />
        <RadioInputGroup
          errors={errors}
          register={register}
          watch={watch}
          configs={{
            name: "role",
            validationSchema: { required: "انتخاب نقش ضروری است" },
            options: [
              {
                value: "OWNER",
                label: "کارفرما",
              },
              { value: "FREELANCER", label: "فریلنسر" },
            ],
          }}
        />
        <div>
          {isCompletingProfile ? (
            <Loader />
          ) : (
            <SubmitButton>تایید</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
