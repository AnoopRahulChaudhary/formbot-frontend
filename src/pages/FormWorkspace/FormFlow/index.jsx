import { useDispatch, useSelector } from "react-redux";
import getFlowElementHtml from "../../../util/flowElement";
import { addFlowElement } from "../../../actions/forms";

function FormFlow({ formId }) {
  const formFlow = useSelector((state) => state.formsReducer[formId].flow);
  const dispatch = useDispatch();

  function handleOnClick(type, tagName) {
    let tagNameCount = 0;
    formFlow.forEach((element) => {
      if (element.type === type) tagNameCount++;
    });

    const flowElementName = `${tagName} ${++tagNameCount}`;
    const flowElementPayload = {
      formId,
      flowElement: {
        elementName: flowElementName,
        type,
      },
    };
    dispatch(addFlowElement(flowElementPayload));
  }

  return (
    <div>
      <br />
      Bubbles
      <button onClick={() => handleOnClick("bubbleText", "Text")}>Text</button>
      <button onClick={() => handleOnClick("bubbleImage", "Image")}>
        Image
      </button>
      <br />
      Inputs
      <button onClick={() => handleOnClick("inputText", "Input Text")}>
        Text
      </button>
      <button onClick={() => handleOnClick("inputEmail", "Input Email")}>
        Email
      </button>
      <br />
      {formFlow &&
        formFlow.map((element) => getFlowElementHtml(formId, element))}
    </div>
  );
}

export default FormFlow;
