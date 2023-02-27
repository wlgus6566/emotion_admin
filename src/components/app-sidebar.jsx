import {useRouter} from "next/router";
import Link from "next/link";
import { faTv, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function AppSidebar() {
    const router = useRouter()
    return (
        <div className="fixed w-56 h-full bg-white shadow-sm">
            <div className="flex justify-center my-14">
                <picture>
                    <img
                        className="w-32 h-auto"
                        src="/logo.svg"
                        alt="company logo"
                    />
                </picture>
            </div>
            <div className="flex flex-col">
        {/*        <Link href="/">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/"
                                ? "bg-orange-100 text-orange-500"
                                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
                        }`}
                    >
                        <div className="mr-2">
                            { <FontAwesomeIcon icon={faTv} />}
                        </div>
                        <div>
                            <p>Home</p>
                        </div>
                    </div>
                </Link>*/}
                <Link href="/works">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname.includes("/works")
                                ? "bg-orange-100 text-orange-500"
                                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
                        }`}
                    >
                        <div className="mr-2">
                            { <FontAwesomeIcon icon={faTv} />}
                        </div>
                        <div>
                            <p>Works</p>
                        </div>
                    </div>
                </Link>
                <Link href="/magazine">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname.includes("/magazine") 
                                ? "bg-orange-100 text-orange-500"
                                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
                        }`}
                    >
                        <div className="mr-2">
                            {<FontAwesomeIcon icon={faBookOpen} />}
                        </div>
                        <div>
                            <p>MAGAZINE</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
