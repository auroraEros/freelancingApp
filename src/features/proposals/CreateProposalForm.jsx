import { useForm } from "react-hook-form";
import RHFTextField from "../../ui/RHFTextField";
import Loader from "../../ui/Loader";
import SubmitButton from "../../ui/SubmitButton";
import useCreateProposal from "./useCreateProposal";

function CreateProposalForm({ projectId, onClose }) {
  const { isCreating, createProposal } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    createProposal({ ...data, projectId }, { onSuccess: () => onClose() });
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 15,
              message: "حداقل 15 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <RHFTextField
          label="هزینه"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "هزینه ضروری است",
          }}
          errors={errors}
        />
        <RHFTextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />

        <div className="">
          {isCreating ? <Loader /> : <SubmitButton>تایید</SubmitButton>}
        </div>
      </form>
    </div>
  );
}

export default CreateProposalForm;
