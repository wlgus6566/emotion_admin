import React, { useState } from "react";
import DatePicker,  { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
registerLocale("ko", ko)
export default function FormDatepicker({ label, name, placeholderText } ) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="relative">
            <label htmlFor={`datepicker_${name}`}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
                <span className="text-primary ml-1">*</span>
            </label>
            <DatePicker
                locale="ko"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                id= {`datepicker_${name}`}
                placeholderText = {placeholderText}
                className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FontAwesomeIcon icon={faCalendar} className="absolute right-3 top-10" />
        </div>

    );
};