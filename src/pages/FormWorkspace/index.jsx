import { useState } from "react";
import { useSelector } from "react-redux";
import FormFlow from "./FormFlow";
import FormTheme from "./FormTheme";
import FormResponse from "./FormResponse";
import FormName from "./FormName";

function FormWorkspace({ formId }) {
  // Todo - delete it later as its tmeporary solution
  formId = 1;
  const formData = useSelector((state) => state.formsReducer[formId]);

  const [formView, setFormView] = useState("flow");

  function handleSaveOnCLick() {
    console.debug(`Form Data : ${JSON.stringify(formData)}`);
  }

  return (
    <div>
      <header>
        <FormName formId={formId} />
        <button onClick={() => setFormView("flow")}>Flow</button>
        <button onClick={() => setFormView("theme")}>Theme</button>
        <button onClick={() => setFormView("response")}>Response</button>
        <button>Share</button>
        <button onClick={handleSaveOnCLick}>Save</button>
      </header>
      <main>
        {formView === "flow" && <FormFlow formId={formId} />}
        {formView === "theme" && <FormTheme formId={formId} />}
        {formView === "response" && <FormResponse formId={formId} />}
      </main>
    </div>
  );
}

export default FormWorkspace;
