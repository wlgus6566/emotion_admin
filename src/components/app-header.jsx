import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function AppHeader({toggle, setToggle}) {
    return (
        <header
            className="flex justify-between items-center w-full bg-white p-5 z-10 pl-60 py-2 px-6">
            <button onClick={() => setToggle(!toggle)}>
                <FontAwesomeIcon
                    className="text-3xl"
                    icon={faBars}
                />
            </button>
            <div className="w-100 relative flex items-center justify-end">
                <img  className="relative  w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none" src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"/>
                <span className="ml-3">LogOut</span>
            </div>
        </header>
            )
}
