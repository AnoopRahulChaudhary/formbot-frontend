import { useState } from "react";
import FormFlow from "./FormFlow";
import FormTheme from "./FormTheme";
import FormResponse from "./FormResponse";

function FormWorkspace({formId}) {
  // Todo - delete it later as its tmeporary solution
  formId = 1;

  const [formView, setFormView] = useState('flow')

  return (
    <div>
      <header>
        <button onClick={() => setFormView('flow')}>Flow</button>
        <button onClick={() => setFormView('theme')}>Theme</button>
        <button onClick={() => setFormView('response')}>Response</button>
        <button>Share</button>
        <button>Save</button>
      </header>
      <main>
        {formView === 'flow' && <FormFlow formId={formId}/>}
        {formView === 'theme' && <FormTheme formId={formId}/>}
        {formView === 'response' && <FormResponse formId={formId}/>}
      </main>
    </div>
  );
}

export default FormWorkspace;
