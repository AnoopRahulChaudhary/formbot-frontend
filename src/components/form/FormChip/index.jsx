import { useNavigate } from "react-router-dom";
import { deleteForm } from "../../../api/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeForm } from "../../../actions/forms";

function FormChip({ formKeyInSate, formName, formId }) {
  const navigate = useNavigate();
  const [formDeleteError, setFormDeleteError] = useState("");

  const dispatch = useDispatch();

  function handleFormUpdate() {
    navigate(`/formWorkspace/${formKeyInSate}`);
  }

  async function handFormDeleteOnClick() {
    const { statusCode, data, errorMessage } = await deleteForm(formId);
    if (Number(statusCode) !== 200) {
      setFormDeleteError(errorMessage);
      return;
    }

    dispatch(removeForm(formKeyInSate));
  }

  return (
    <div>
      <a
        style={{ border: "1px solid red", margin: "10px" }}
        onClick={handleFormUpdate}
      >
        {formName}
      </a>
      <button onClick={handFormDeleteOnClick}>Delete {formName}</button>
    </div>
  );
}

export default FormChip;
