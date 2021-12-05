import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const ReactToast = () => {
  const notify = () => {
    toast("Basic notification", { position: toast.POSITION.TOP_LEFT });
    toast.success("Sucess notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info notification", { position: toast.POSITION.TOP_RIGHT });
    toast.warning("Warning notification", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
    toast.error("Error notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic notification", { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
};

export default ReactToast;
