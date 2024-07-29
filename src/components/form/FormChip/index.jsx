import { useNavigate } from "react-router-dom";

function FormChip({ formKeyInSate, formName }) {
  const navigate = useNavigate();

  function handleFormUpdate() {
    navigate(`/formWorkspace/${formKeyInSate}`);
  }

  return (
    <a
      style={{ border: "1px solid red", margin: "10px" }}
      onClick={handleFormUpdate}
    >
      {formName}
    </a>
  );
}

export default FormChip;
