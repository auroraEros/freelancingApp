import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";

import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import ChangeUserStatus from "./ChangeUserStatus";
import { useState } from "react";

const userStats = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { name, email, phoneNumber, status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td> {toPersianNumbers(phoneNumber)}</td>
      <td>
        <span className={`badge ${userStats[status].className}`}>
          {userStats[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
