import React, {useEffect, useState} from "react";
import DatePicker,  { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import FormInput from "@/components/global/form-input";
registerLocale("ko", ko)
const FormDatepicker = ({
                            label,
                            name,
                            required,
                            placeholderText,
                            disabled,
                            onChange = () => {},
                         }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        onChange && onChange(date)
    }, [date]);

    return (
        <div className="relative">
            <label htmlFor={`datepicker_${name}`}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
                <span className="text-primary ml-1">*</span>
            </label>
            <DatePicker
                locale="ko"
                required={required}
                selected={date}
                onChange={(date) => setDate(date)}
                id= {`datepicker_${name}`}
                placeholderText = {placeholderText}
                className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FontAwesomeIcon icon={faCalendar} className="absolute right-3 top-10" />
        </div>

    );
}

FormDatepicker.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    placeholderText: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

FormDatepicker.defaultProps = {
    label: "",
    name: "",
    disabled: false,
    placeholderText: "",
    required: true,
    onChange: null,

};

export default FormDatepicker;