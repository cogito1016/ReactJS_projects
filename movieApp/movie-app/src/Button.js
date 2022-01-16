import PropTypes from "prop-types";

function Button(props) {
  return <button onClick={props.onclickFunc}>{props.text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
