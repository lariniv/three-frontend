import { useSnapshot } from "valtio";
import state from "../../store";
import PropTypes from "prop-types";

const Tab = ({ tab, isFilterTab, isActiveTab, callbackFn }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      style={activeStyles}
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={callbackFn}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.object.isRequired,
  isFilterTab: PropTypes.bool,
  isActiveTab: PropTypes.bool,
  callbackFn: PropTypes.func.isRequired,
};

export default Tab;
