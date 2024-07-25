function Rating({ elementName, handleFlowElementDeletion }) {
  return (
    <div>
      <h6>{elementName}</h6>
      <div>Hint : User will tap to rate out of 5</div>
      <button onClick={() => handleFlowElementDeletion(elementName)}>
        Delete
      </button>
    </div>
  );
}

export default Rating;
