import { useState, useRef } from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
export default function FormFile(
    {
        label,
        max,
        multiple
    }
) {
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        setFiles(Array.from(e.target.files || []));
    };

    const handleAdd = (e) => {
        console.log(Array.from(e.target.files))
        console.log( [...files, Array.from(e.target.files)])
        setFiles( [...files,  Array.from(e.target.files || [])])
    };
    const handleDelete = (index) => {
        const newFiles = [...files.slice(0, index), ...files.slice(index + 1)];

        const store = new DataTransfer();
        newFiles.forEach((file) => store.items.add(file));

        if (inputRef.current) {
            inputRef.current.files = store.files;
        }

        setFiles(newFiles);
    };

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label} </label>
            <input
                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ribg-gray-800 focus:bordbg-gray-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ribg-gray-800 dark:focus:bordbg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-800 "
                ref={inputRef}
                type="file"
                max={max}
                multiple={multiple}
                onChange={handleAdd} />
                <ul className="flex flex-wrap gap-3">
                    {files.map((file, index) => (
                        <li key={`${file.name}_${index}`}
                            className="flex items-center mt-2 p-2 px-4 bg-gray-100 text-xs rounded-full"
                        >
                            {file.name}
                            <button
                                onClick={() => handleDelete(index)}
                                className="ml-2"
                            >
                                <FontAwesomeIcon
                                    className="text-sm"
                                    icon={faTimes}
                                />
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
    );
}
FormFile.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    multiple: PropTypes.bool,
    required: PropTypes.bool,
};

FormFile.defaultProps = {
    value: "",
    max: 10,
    multiple: false,
    disabled: false,
    autoFocus: false,
    onChange: null,
};

