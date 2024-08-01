import { useForm } from "react-hook-form";
import Loader from "../../../ui/Loader";
import useCreateCategory from "./useCreateCategory";
import RHFTextField from "../../../ui/RHFTextField";
import RHFSelect from "../../../ui/RHFSelect";

function CreateCategoryForm({ onClose }) {
  const options = [
    { label: "project", value: "project" },
    { label: "comment", value: "comment" },
    { label: "post", value: "post" },
    { label: "ticket", value: "ticket" },
  ];

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isCreating, createCategory } = useCreateCategory();

  const onSubmit = (data) => {
    createCategory(data, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 5 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <RHFTextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <RHFTextField
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        required
        validationSchema={{
          required: "عنوان انگلیسی ضروری است",
        }}
        errors={errors}
      />

      <RHFSelect
        label="نوع"
        name="type"
        register={register}
        options={options}
        required
        validationSchema={{
          required: "نوع دسته‌بندی ضروری است",
        }}
        errors={errors}
      />

      <div className="!mt-8">
        {isCreating ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
