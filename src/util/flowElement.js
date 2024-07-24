import Image from "../components/form/bubbles/Image";
import BubbleText from "../components/form/bubbles/Text";
import Email from "../components/form/inputs/Email";
import InputText from "../components/form/inputs/Text";

function getFlowElementHtml(formId, flowElement) {
  if (flowElement.type === "bubbleText") {
    return <BubbleText formId={formId} elementName={flowElement.elementName} />;
  }

  if (flowElement.type === "bubbleImage") {
    return <Image formId={formId} elementName={flowElement.elementName} />;
  }

  if (flowElement.type === "inputText") {
    return <InputText formId={formId} elementName={flowElement.elementName} />;
  }

  if (flowElement.type === "inputEmail") {
    return <Email formId={formId} elementName={flowElement.elementName} />;
  }
}

export default getFlowElementHtml;
