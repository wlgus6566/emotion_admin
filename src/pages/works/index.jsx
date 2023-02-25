import DefaultsLayout from "@/layouts/defaults";
import PageTitle from "@/components/global/page-title";
export default function Works() {
    return (
        <div>
            <PageTitle title="Works 관리"/>
            <div className="grid lg:grid-cols-3 gap-5 mb-16">
                <div className="rounded bg-white h-40 shadow-sm"></div>
                <div className="rounded bg-white h-40 shadow-sm"></div>
                <div className="rounded bg-white h-40 shadow-sm"></div>
            </div>
            <div className="grid col-1 bg-white h-96 shadow-sm"></div>
        </div>
    );
}

Works.layout = DefaultsLayout;
