import { Link } from "react-router-dom";

function FormChip({ formKeyInSate, formName }) {
  const formWorkspaceLink = `/formWorkspace/${formKeyInSate}`;
  return <Link to="formWorkspaceLink">{formName}</Link>;
}

export default FormChip;
