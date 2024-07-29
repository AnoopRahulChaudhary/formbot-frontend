import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormFlow from "./FormFlow";
import FormTheme from "./FormTheme";
import FormResponse from "./FormResponse";
import FormName from "./FormName";
import { addForm, updateForm } from "../../api/form";
import { updateFormId } from "../../actions/forms";

function FormWorkspace() {
  const formKey = Number(window.location.pathname.split("/").pop());

  const formData = useSelector((state) => state.formsReducer[formKey]);
  console.debug(`form data in Formworkspace ${JSON.stringify(formData)}`);

  const [formView, setFormView] = useState("flow");
  const [formSaveErrorMessage, setFormSaveErrorMessage] = useState("");

  const dispatch = useDispatch();

  async function handleSaveOnCLick() {
    if (formData._id) {
      await updateFormDetails();
    } else {
      await saveForm();
    }
  }

  async function saveForm() {
    console.debug(`Form Data to save : ${JSON.stringify(formData)}`);
    const { statusCode, data, errorMessage } = await addForm(formData);
    if (Number(statusCode) !== 201) {
      setFormSaveErrorMessage(errorMessage);
      return;
    }

    dispatch(updateFormId(formKey, data.formId));
    console.log(`form added successfully, ${JSON.stringify(data)}`);
  }

  async function updateFormDetails() {
    console.debug(`Form Data to update : ${JSON.stringify(formData)}`);
    const { statusCode, data, errorMessage } = await updateForm(formData);
    if (statusCode !== 200) {
      setFormSaveErrorMessage(errorMessage);
      return;
    }

    console.log(`form updated successfully, ${JSON.stringify(data)}`);
  }

  return (
    <div>
      <header>
        <FormName formId={formKey} />
        <button onClick={() => setFormView("flow")}>Flow</button>
        <button onClick={() => setFormView("theme")}>Theme</button>
        <button onClick={() => setFormView("response")}>Response</button>
        <button>Share</button>
        <button onClick={handleSaveOnCLick}>Save</button>
        {formSaveErrorMessage && <div>{formSaveErrorMessage}</div>}
      </header>
      <main>
        {formView === "flow" && <FormFlow formId={formKey} />}
        {formView === "theme" && <FormTheme formId={formKey} />}
        {formView === "response" && <FormResponse formId={formKey} />}
      </main>
    </div>
  );
}

export default FormWorkspace;
