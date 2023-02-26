import DefaultsLayout from "@/layouts/defaults";
import PaginationItem from "@/components/global/pagination-item";
import PageTitle from "@/components/global/page-title";
import InputSearch from "@/components/global/input-search";
import Link from "next/link";
import Button from "@/components/global/button";

export default function Magazine({datas}) {
    return (
        <div>
            <PageTitle title="Magazine 관리"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white">
                <InputSearch/>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                            {datas.map(data =>
                                <tr key={data.id} className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        <Link href={`/magazine/${data.id}`}>
                                            <span>{data.title}</span>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                     Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                    Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={`/magazine/${data.id}`}>
                                            <span
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                            </span>
                                        </Link>

                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-6 space-x-2">
                <Button/>
            </div>
            <PaginationItem/>

        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
    const datas = await res.json();

    return {
        props: {
            datas
        },
        revalidate: 20
    }
}

Magazine.layout = DefaultsLayout;