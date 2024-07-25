function Date({ elementName, handleFlowElementDeletion }) {
  return (
    <div>
      <h6>{elementName}</h6>
      <div>Hint : User will select a date</div>
      <button onClick={() => handleFlowElementDeletion(elementName)}>
        Delete
      </button>
    </div>
  );
}

export default Date;
