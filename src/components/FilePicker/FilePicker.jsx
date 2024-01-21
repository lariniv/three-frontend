import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload file
        </label>

        <p className="mt-2 text-gary-500 test-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          callbackFn={() => readFile("logo")}
          className={"text-xs"}
        />
        <CustomButton
          type="filled"
          title="Full"
          callbackFn={() => readFile("full")}
          className={"text-xs "}
        />
      </div>
    </div>
  );
};

FilePicker.propTypes = {
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
  readFile: PropTypes.func.isRequired,
};

export default FilePicker;
