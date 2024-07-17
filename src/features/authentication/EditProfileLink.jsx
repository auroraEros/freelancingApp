import { NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

function EditProfileLink() {
  return (
    <div>
      <NavLink
        className="text-primary-900 transition-colors duration-300 hover:text-primary-700"
        to="edit-profile"
      >
        <HiOutlineUser className="w-5 h-5" />
      </NavLink>
    </div>
  );
}

export default EditProfileLink;
