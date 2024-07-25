function Video({
  elementName,
  elementValue,
  handleFlowElementValueChange,
  handleFlowElementDeletion,
}) {
  return (
    <div>
      <h6>{elementName}</h6>
      <input
        type="text"
        onChange={(e) =>
          handleFlowElementValueChange(elementName, e.target.value)
        }
        value={elementValue}
      />
      <button onClick={() => handleFlowElementDeletion(elementName)}>
        Delete
      </button>
    </div>
  );
}

export default Video;
