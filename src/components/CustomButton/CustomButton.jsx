import PropTypes from "prop-types";
import state from "../../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../../config/helpers";

const CustomButton = ({ type, title, callbackFn, className }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        border: `1px ${snap.color} solid`,
        color: snap.color,
      };
    }
  };

  return (
    <button
      onClick={callbackFn}
      className={`px-2 py-1.5 flex-1 rounded-md ${className}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  callbackFn: PropTypes.func,
  className: PropTypes.string,
};

export default CustomButton;
