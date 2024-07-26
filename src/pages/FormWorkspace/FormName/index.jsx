import { useDispatch, useSelector } from "react-redux";
import { updateFormName } from "../../../actions/forms";

function FormName({ formId }) {
  const formName = useSelector((state) => state.formsReducer[formId].name);
  const dispatch = useDispatch();

  function handleOnChange(e) {
    const newFormName = e.target.value;
    dispatch(updateFormName(formId, newFormName));
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleOnChange}
        value={formName}
        placeholder="Enter Form Name"
      />
    </div>
  );
}

export default FormName;
