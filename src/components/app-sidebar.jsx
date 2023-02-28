import {useRouter} from "next/router";
import Link from "next/link";
import { faHome, faTv, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function AppSidebar() {
    const router = useRouter()
    return (
        <div className="fixed w-56 h-full shadow-sm font-family-karla bg-primary z-20">
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
            <Link href="/">
                    <div
                        className={`text-lg pl-10 py-6 rounded text-center cursor-pointer flex items-center transition-colors ${
                            router.pathname == "/"
                                ? "bg-red-700 text-white font-bold"
                                : "text-white hover:bg-red-600"
                        }`}
                    >
                        <div className="mr-3">
                            { <FontAwesomeIcon icon={faHome} />}
                        </div>
                        <div>
                            <p>Home</p>
                        </div>
                    </div>
                </Link>
                <Link href="/works">
                    <div
                        className={`text-lg pl-10 py-6 rounded text-center cursor-pointer flex items-center transition-colors ${
                            router.pathname.includes("/works")
                                ? "bg-red-700 text-white font-bold"
                                : "text-white hover:bg-red-600"
                        }`}
                    >
                        <div className="mr-3">
                            { <FontAwesomeIcon icon={faTv} />}
                        </div>
                        <div>
                            <p>Works</p>
                        </div>
                    </div>
                </Link>
                <Link href="/magazine">
                    <div
                        className={`text-lg pl-10 py-6 rounded text-center cursor-pointer flex items-center transition-colors ${
                            router.pathname.includes("/magazine")
                                ? "bg-red-700 text-white font-bold"
                                : "text-white hover:bg-red-600"
                        }`}
                    >
                        <div className="mr-3">
                            {<FontAwesomeIcon icon={faBookOpen} />}
                        </div>
                        <div>
                            <p>Magazine</p>
                        </div>
                    </div>
                </Link>
                <div className="absolute left-0 bottom-6 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="w-3/12 h-auto"
                            src="/nav_logo.png"
                            alt="company logo"
                        />
                        <p className="mt-6 text-white font-bold">MAKE · GREATNESS</p>
                        <p className="mt-2 text-neutral-300 text-sm">위대함을 만들어 갑니다. </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
