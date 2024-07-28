import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../proposals/CreateProposalForm";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
    textColor: "text-primary-900",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
    textColor: "text-secondary-300",
  },
};

function ProjectRow({ project, index }) {
  const [open, setIsOpen] = useState(false);
  const { status } = project;


  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>

      <td>
        <Modal
          open={open}
          onClose={() => setIsOpen(false)}
          title={`ارسال درخواست برای پروژه ${project.title}`}
        >
          <CreateProposalForm
            projectId={project._id}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
        <button onClick={() => setIsOpen(true)} disabled={status === "CLOSED"}>
          <MdAssignmentAdd
            className={`w-5 h-5  ${projectStatus[status].textColor}`}
          />
        </button>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
