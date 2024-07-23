function Image({ elementNameInForm, formState, setFormState }) {
  return (
    <div>
      <h6>Image</h6>
      <input
        type="text"
        onChange={(e) =>
          setFormState({ ...formState, [elementNameInForm]: e.target.value })
        }
        value={formState.elementNameInForm}
      />
    </div>
  );
}

export default Image;
