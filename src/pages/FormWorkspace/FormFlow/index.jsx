import { useDispatch, useSelector } from "react-redux";
import getFlowElementHtml from "../../../util/flowElement";
import { addFlowElement, updateFlowElementValue } from "../../../actions/forms";
import FormFlowElement from "../../../data/formFlowElement";

function FormFlow({ formId }) {
  const formFlow = useSelector((state) => state.formsReducer[formId].flow);
  const dispatch = useDispatch();

  function handleOnClick(type, tagName) {
    let tagNameCount = 0;
    formFlow.forEach((element) => {
      if (element.type === type) tagNameCount++;
    });

    const flowElementName = `${tagName} ${++tagNameCount}`;
    const flowElement = new FormFlowElement(flowElementName, type);
    const flowElementPayload = {
      formId,
      flowElement,
    };
    dispatch(addFlowElement(flowElementPayload));
  }

  function handleFlowElementValueChange(flowElementName, flowElementValue) {
    const updatedValuePayload = {
      formId,
      flowElementName,
      flowElementValue,
    };
    dispatch(updateFlowElementValue(updatedValuePayload));
  }

  return (
    <div>
      <br />
      Bubbles
      <button onClick={() => handleOnClick("bubbleText", "Text")}>Text</button>
      <button onClick={() => handleOnClick("bubbleImage", "Image")}>
        Image
      </button>
      <button onClick={() => handleOnClick("bubbleVideo", "Video")}>
        Video
      </button>
      <button onClick={() => handleOnClick("bubbleGIF", "GIF")}>GIF</button>
      <br />
      Inputs
      <button onClick={() => handleOnClick("inputText", "Input Text")}>
        Text
      </button>
      <button onClick={() => handleOnClick("inputNumber", "Input Number")}>
        Number
      </button>
      <button onClick={() => handleOnClick("inputEmail", "Input Email")}>
        Email
      </button>
      <button onClick={() => handleOnClick("inputPhone", "Input Phone")}>
        Phone
      </button>
      <button onClick={() => handleOnClick("inputDate", "Input Date")}>
        Date
      </button>
      <button onClick={() => handleOnClick("inputRate", "Input Rate")}>
        Rating
      </button>
      <button onClick={() => handleOnClick("inputButton", "Input Button")}>
        Button
      </button>
      <br />
      {formFlow &&
        formFlow.map((element) =>
          getFlowElementHtml(formId, element, handleFlowElementValueChange)
        )}
    </div>
  );
}

export default FormFlow;
