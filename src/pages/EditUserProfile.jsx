import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useUpdateProfile from "../features/authentication/useUpdateProfile";
import { useUser } from "../hooks/useUser";
import RHFTextField from "../ui/RHFTextField";
import RHFTextarea from "../ui/RHFTextarea";
import SubmitButton from "../ui/SubmitButton";
import Loader from "../ui/Loader";

function EditUserProfile() {
  const { isLoading, user } = useUser();
  const { isUpdating, updateProfile } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        description: user.description || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    updateProfile(data);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="">
      <h1 className="text-secondary-700 font-bold mb-4">ویرایش پروفایل</h1>
      <div className="flex justify-center items-center">
        <form className="space-y-10 w-[50%]" onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
            className="field__input"
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
            className="field__input"
          />

          <RHFTextarea
            label="درباره من"
            name="description"
            required
            register={register}
            errors={errors}
            validationSchema={{
              minLength: {
                value: 10,
                message: "حداقل ۱۰ کاراکتر وارد کنید",
              },
            }}
            className="field__input"
          />

          <div>
            {isUpdating ? <Loader /> : <SubmitButton>تایید</SubmitButton>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserProfile;
