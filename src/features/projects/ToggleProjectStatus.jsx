import { Switch } from "@headlessui/react";
import { useState } from "react";
import useToggleProjectStatus from "./useToggleprojectStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader height={20} width={50} />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          label={status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
