function Video({ elementName, elementValue, handleFlowElementValueChange }) {
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
    </div>
  );
}

export default Video;
