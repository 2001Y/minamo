const Radio = (props) => {
  let { name, value, htmlFor } = props;

  if (!htmlFor) {
    htmlFor = value;
  }

  return (
    <>
      <input type="radio" name={name} value={value} id={htmlFor} required />
      <label htmlFor={htmlFor}>{value}</label>
    </>
  );
};

export default Radio;
