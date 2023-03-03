import PropTypes from "prop-types";

export default function Button({name, size, type, onClick = () => {},}) {
    return (
        <>
            {size === 'lg' &&
                <button
                    onClick={(e) => onClick(e)}
                    type={type}
                    className="text-white bg-primary hover:bg-red-600 font-bold rounded-lg text-lg w-full px-5 py-3 text-center outline-none">
                    {name}
                </button>
            }
            {size === 'md' &&
                <button
                    onClick={(e) => onClick(e)}
                    type={type}
                    className="text-white bg-primary hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {name}
                </button>
            }
            {size === 'sm' &&
                <button
                    onClick={(e) => onClick(e)}
                    type={type}
                    className="text-white bg-primary hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {name}
                </button>
            }
        </>

    )
}
Button.propTypes = {
    onClick: PropTypes.func,
};