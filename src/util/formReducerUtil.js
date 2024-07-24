function addNewFlowElement(state, payload) {
  const formId = payload.formId;
  const flowElement = payload.flowElement;
  const form = state[formId];
  console.debug(
    `New flow element to add : ${JSON.stringify(
      flowElement
    )} in form with id : ${formId}`
  );
  console.debug(
    `state before adding new flow element : ${JSON.stringify(form)}`
  );

  const updatedForm = { ...form, flow: [...form.flow, flowElement] };

  console.debug(
    `state after adding new flow element : ${JSON.stringify(updatedForm)}`
  );
  return updatedForm;
}

function deleteFlowElement(state, payload) {
  const formId = payload.formId;
  const flowElementName = payload.flowElementName;
  const form = state[formId];
  console.debug(
    `flowElementName to delete : ${flowElementName} in form with id: ${formId}`
  );
  console.debug(`state before deleting flow element : ${JSON.stringify(form)}`);

  const updatedFlow = [];
  for (let flowElelment of form.flow) {
    if (flowElelment.name !== flowElementName) {
      updatedFlow.push(flowElelment);
    }
  }

  const updatedForm = { ...form, flow: updatedFlow };
  console.debug(
    `state after deleting flow element : ${JSON.stringify(updatedForm)}`
  );
  return updatedForm;
}

function addFlowElementValue(state, payload) {
  const formId = payload.formId;
  const flowElementName = payload.flowElementName;
  const flowElementValue = payload.flowElementValue;

  console.debug(
    `FlowElement value to update : ${flowElementValue} for element ${flowElementName} in form with id ${formId}`
  );

  const form = state[formId];
  const flow = form.flow;
  console.debug(
    `state before adding updating flowelement value : ${JSON.stringify(form)}`
  );
  const updatedFlow = [];
  for (let flowElement of flow) {
    if (flowElement.name === flowElementName) {
      const updatedFlowElement = {
        ...flowElement,
        value: flowElementValue,
      };
      updatedFlow.push(updatedFlowElement);
    } else {
      updatedFlow.push(flowElement);
    }
  }

  const updatedForm = { ...form, flow: updatedFlow };
  console.debug(
    `state after adding updating flow element value : ${JSON.stringify(
      updatedForm
    )}`
  );
  return updatedForm;
}

export { addNewFlowElement, deleteFlowElement, addFlowElementValue };
