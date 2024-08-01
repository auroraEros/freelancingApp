import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateCategoryForm from "./CreateCategoryForm";
import { HiOutlinePlus } from "react-icons/hi";

function CategoriesHeader() {
const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">دسته‌بندی‌ها</h1>
      <Modal
        title="اضافه کردن دسته‌بندی جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateCategoryForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن دسته‌بندی</span>
      </button>
    </div>
  );
}

export default CategoriesHeader
