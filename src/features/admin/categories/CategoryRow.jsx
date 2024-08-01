import { TbPencilMinus } from "react-icons/tb";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import CreateCategoryForm from "./CreateCategoryForm";
import { useState } from "react";
import useRemoveCategory from "./useRemoveCategory";

function CategoryRow({ category, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { title, englishTitle, type, description } = category;
  const { removeCategory } = useRemoveCategory();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td> {title}</td>
      <td> {englishTitle}</td>
      <td> {description}</td>
      <td> {type}</td>

      <td>
        <div className="flex items-center gap-x-4">
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            title={`حذف ${category.title}`}
            open={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              resourceName={category.title}
              onClose={() => setIsDeleteOpen(false)}
              onConfirm={() =>
                removeCategory(category._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
              disabled={false}
            />
          </Modal>
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
