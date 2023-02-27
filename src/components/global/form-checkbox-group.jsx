import { useState, useEffect } from 'react';

export default function FormCheckboxGroup (props) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    function handleCheckboxChange(event) {
        const value = event.target.value;
        const selectedIndex = selectedCheckboxes.indexOf(value);
        let newSelectedCheckboxes = [...selectedCheckboxes];

        if (selectedIndex === -1) {
            newSelectedCheckboxes.push(value);
        } else {
            newSelectedCheckboxes.splice(selectedIndex, 1);
        }

        setSelectedCheckboxes(newSelectedCheckboxes);
    }

    useEffect(() => {
        if (props.onChange) {
            props.onChange(selectedCheckboxes);
        }
    }, [selectedCheckboxes]);

    const Checkbox = ({ label, value, onChange }) =>  {
        return (
            <div className="flex items-center pl-3">
                <input
                    id={value}
                    type="checkbox"
                    value={value}
                    checked={selectedCheckboxes.indexOf(value) !== -1}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor={value}
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>

            </div>
        );
    }

    return (
        <div>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {props.checkboxes.map((checkbox) => (
                    <li key={checkbox.value} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <Checkbox
                            key={checkbox.value}
                            label={checkbox.label}
                            value={checkbox.value}
                            onChange={handleCheckboxChange}
                        />
                    </li>

                ))}
            </ul>
        </div>
    );
}

