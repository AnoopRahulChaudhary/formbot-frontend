function Number({ elementName, handleFlowElementDeletion }) {
  return (
    <div>
      <h6>{elementName}</h6>
      <div>Hint : User will input a number on his form</div>
      <button onClick={() => handleFlowElementDeletion(elementName)}>
        Delete
      </button>
    </div>
  );
}

export default Number;
