import { replace, useNavigate } from "react-router-dom";

function NoAccess() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-secondary-100 flex flex-col gap-y-8 justify-center items-center">
      <span className="text-2xl text-error">
        شما مجوز دسترسی به این بخش را ندارید!
      </span>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="btn btn--primary hover:opacity-90"
      >
        بازگشت به خانه
      </button>
    </div>
  );
}

export default NoAccess;
