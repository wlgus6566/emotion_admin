import {useRouter} from "next/router";
import Link from "next/link";

export default function AppHeader() {
    const router = useRouter()
    return (
        <header class="w-full bg-white py-2 px-6 hidden sm:flex fixed right-0 top-0 left-0 p-5 z-10 ">
            <div class="w-1/2"></div>
            <div class="relative w-1/2 flex items-center justify-end">
                <img  className="relative  w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none" src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"/>
                <span className="ml-3">LogOut</span>
            </div>
</header>
    )
}
