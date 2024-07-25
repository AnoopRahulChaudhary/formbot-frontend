import GIF from "../components/form/bubbles/GIF";
import Image from "../components/form/bubbles/Image";
import BubbleText from "../components/form/bubbles/Text";
import Video from "../components/form/bubbles/Video";
import Button from "../components/form/inputs/Button";
import Date from "../components/form/inputs/Date";
import Email from "../components/form/inputs/Email";
import Number from "../components/form/inputs/Number";
import Phone from "../components/form/inputs/Phone";
import Rating from "../components/form/inputs/Rating";
import InputText from "../components/form/inputs/Text";

function getFlowElementHtml(formId, flowElement, handleFlowElementValueChange) {
  console.debug(
    `called getFlowElementHtml with params : ${formId}, ${JSON.stringify(
      flowElement
    )}`
  );

  if (flowElement.type === "bubbleText") {
    return (
      <BubbleText
        formId={formId}
        elementName={flowElement.name}
        elementValue={flowElement.value}
        handleFlowElementValueChange={handleFlowElementValueChange}
      />
    );
  }

  if (flowElement.type === "bubbleImage") {
    return (
      <Image
        formId={formId}
        elementName={flowElement.name}
        elementValue={flowElement.value}
        handleFlowElementValueChange={handleFlowElementValueChange}
      />
    );
  }

  if (flowElement.type === "bubbleVideo") {
    return (
      <Video
        formId={formId}
        elementName={flowElement.name}
        elementValue={flowElement.value}
        handleFlowElementValueChange={handleFlowElementValueChange}
      />
    );
  }

  if (flowElement.type === "bubbleGIF") {
    return (
      <GIF
        formId={formId}
        elementName={flowElement.name}
        elementValue={flowElement.value}
        handleFlowElementValueChange={handleFlowElementValueChange}
      />
    );
  }

  if (flowElement.type === "inputText") {
    return <InputText elementName={flowElement.name} />;
  }

  if (flowElement.type === "inputNumber") {
    return <Number elementName={flowElement.name} />;
  }

  if (flowElement.type === "inputEmail") {
    return <Email elementName={flowElement.name} />;
  }

  if (flowElement.type === "inputPhone") {
    return <Phone elementName={flowElement.name} />;
  }

  if (flowElement.type === "inputDate") {
    return <Date elementName={flowElement.name} />;
  }

  if (flowElement.type === "inputRate") {
    return <Rating elementName={flowElement.name} />;
  }

  if (flowElement.type === "inputButton") {
    return (
      <Button
        elementName={flowElement.name}
        elementValue={flowElement.value}
        handleFlowElementValueChange={handleFlowElementValueChange}
      />
    );
  }
}

export default getFlowElementHtml;
