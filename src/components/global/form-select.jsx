import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import FormInput from "@/components/global/form-input";

const FormSelect =  ({
                         label,
                         options,
                         onChange = () => {},
                         value = "",
                         disabled,
                         required
                    })  => {

    const [selected, setSelected] = useState(value);
    const changeValue = (e) => {
        e.preventDefault();
        onChange(e.target.value)
        setSelected(e.target.value)
    }
    useEffect(() => {
        onChange && onChange(selected)
    }, [selected]);
    return (
        <div>
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label} <span className="text-primary ml-1">*</span>
            </label>
            <select id={label}
                    onChange={(e) => changeValue(e)}
                    defaultValue={selected}
                    disabled={disabled}
                    required={required}
                    value={value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                < option value="" selected disabled hidden >선택해주세요.< /option>
                {options.map((option) => (

                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

FormSelect.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
};

FormSelect.defaultProps = {
    value: "",
    type: "text",
    disabled: false,
    autoFocus: false,
    onChange: null,
    required: true,
};


export default FormSelect;