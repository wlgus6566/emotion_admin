import AppSidebar from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";
export default function DefaultsLayout({ children }) {
    return (
        <>
            <AppHeader/>
            <AppSidebar/>
            <div className="p-16 flex-1 ml-56">
                { children }
            </div>
        </>
    );
}
