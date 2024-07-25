function Email({ elementName, handleFlowElementDeletion }) {
  return (
    <div>
      <h6>{elementName}</h6>
      <div>Hint : User will input a email on his form</div>
      <button onClick={() => handleFlowElementDeletion(elementName)}>
        Delete
      </button>
    </div>
  );
}

export default Email;
