import { useState } from "react";
import Image from "../../components/form/bubbles/Image";
import BubbleText from "../../components/form/bubbles/Text";
import InputText from "../../components/form/inputs/Text";
import Email from "../../components/form/inputs/Email";

function FormWorkspace() {
  const [formFlow, setFormFlow] = useState([]);
  const [formSate, setFormSate] = useState({});
  const [flowElementCount, setFlowElementCount] = useState({
    bubbleTextCount: 0,
    bubbleImageCount: 0,
    inputTextCount: 0,
    inputEmailCount: 0,
  });

  function handleSaveClick() {
    const flow = [];
    formFlow.forEach((element) => {
      flow.push({ ...element, value: formSate[element.name] });
    });
    const form = {
      formName: "form 1",
      flow: flow,
      theme: "white",
    };
    console.log(form);
  }

  function handleBubbleTextOnClick() {
    setFlowElementCount({
      ...flowElementCount,
      bubbleTextCount: flowElementCount.bubbleTextCount + 1,
    });

    const elementName = `bubbleText ${flowElementCount.bubbleTextCount}`;

    const html = (
      <BubbleText
        elementNameInForm={elementName}
        formState={formSate}
        setFormState={setFormSate}
      />
    );

    setFormFlow([
      ...formFlow,
      { type: "bubbleText", name: elementName, html: html },
    ]);
  }

  function handleBubbleImageOnClick() {
    setFlowElementCount({
      ...flowElementCount,
      bubbleImageCount: flowElementCount.bubbleImageCount + 1,
    });
    const elementName = `bubbleImage ${flowElementCount.bubbleImageCount}`;

    const html = (
      <Image
        elementNameInForm={elementName}
        formState={formSate}
        setFormState={setFormSate}
      />
    );

    setFormFlow([
      ...formFlow,
      { type: "bubbleImage", name: elementName, html: html },
    ]);
  }

  function handleInputTextOnClick() {
    setFlowElementCount({
      ...flowElementCount,
      inputTextCount: flowElementCount.inputTextCount + 1,
    });
    const elementName = `inputText ${flowElementCount.inputTextCount}`;

    const html = (
      <InputText
        elementNameInForm={elementName}
        formState={formSate}
        setFormState={setFormSate}
      />
    );

    setFormFlow([
      ...formFlow,
      { type: "inputText", name: elementName, html: html },
    ]);
  }

  function handleInputEmailOnClick() {
    setFlowElementCount({
      ...flowElementCount,
      inputEmailCount: flowElementCount.inputEmailCount + 1,
    });
    const elementName = `inputEmail ${flowElementCount.inputEmailCount}`;

    const html = (
      <Email
        elementNameInForm={elementName}
        formState={formSate}
        setFormState={setFormSate}
      />
    );

    setFormFlow([
      ...formFlow,
      { type: "inputEmail", name: elementName, html: html },
    ]);
  }

  return (
    <div>
      <button onClick={handleSaveClick}>Save</button>
      <br />
      Bubbles
      <button onClick={handleBubbleTextOnClick}>Text</button>
      <button onClick={handleBubbleImageOnClick}>Image</button>
      <br />
      Inputs
      <button onClick={handleInputTextOnClick}>Text</button>
      <button onClick={handleInputEmailOnClick}>Email</button>
      <br />
      {formFlow && formFlow.map((element) => element.html)}
    </div>
  );
}

export default FormWorkspace;
