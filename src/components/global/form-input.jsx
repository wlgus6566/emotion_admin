import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const FormInput = ({
                       label,
                       type,
                       disabled,
                       placeholder,
                       required,
                       value = "",
                       onChange = () => {},
                   }) => {
    const [inputValue, setInputValue] = useState(value);
    const changeValue = (e) => {
        onChange(e.target.value)
    }
    useEffect(() => {
        onChange && onChange(inputValue)
    }, [inputValue]);

    return (
        <div>
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >

                {label}
                {(type === 'color' && value ) &&
                    <span
                        style={{ background: `${value}` }}
                        className="ml-3 text-white py-1 px-2 rounded-2xl"
                    >
                        ${value}
                    </span>
                }
                {required &&  <span className="text-primary ml-1"> *</span>}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={value}
                type={type}
                onChange={(e) => changeValue(e)}
                disabled={disabled}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "number", "color"]),
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
};

FormInput.defaultProps = {
    value: "",
    type: "text",
    disabled: false,
    autoFocus: false,
    onChange: null,
    required: true,
};


export default FormInput;