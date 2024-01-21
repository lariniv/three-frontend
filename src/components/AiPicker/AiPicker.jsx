import PropTypes from "prop-types";
import CustomButton from "../CustomButton/CustomButton";

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            className={"text-xs"}
            type="outline"
            title="Asking Ai..."
          />
        ) : (
          <>
            <CustomButton
              title="Ai logo"
              type="outline"
              callbackFn={() => handleSubmit("logo")}
              className={"text-xs"}
            />

            <CustomButton
              title="Ai full"
              type="filled"
              callbackFn={() => handleSubmit("full")}
              className={"text-xs"}
            />
          </>
        )}
      </div>
    </div>
  );
};

AiPicker.propTypes = {
  prompt: PropTypes.string.isRequired,
  setPrompt: PropTypes.func.isRequired,
  generatingImg: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AiPicker;
