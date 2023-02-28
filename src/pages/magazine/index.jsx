import DefaultsLayout from "@/layouts/defaults";
import PaginationItem from "@/components/global/pagination-item";
import PageTitle from "@/components/global/page-title";
import InputSearch from "@/components/global/input-search";
import Link from "next/link";
import Button from "@/components/global/button";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Magazine({datas}) {

    return (
        <>
            <PageTitle title="Magazine 관리"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white">
                <InputSearch/>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
                    <thead className="bg-gray-100">
                        <tr>
                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                            Product name
                        </th>
                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                            Color
                        </th>
                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                            Category
                        </th>
                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                            Price
                        </th>
                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                            {datas.map(data =>
                                <tr key={data.id} className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="p-6 text-md text-base text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.title}
                                    </th>
                                    <td className="p-6 text-md text-base">
                                        <Link href={`/magazine/${data.id}`}>
                                            <span>{data.title}</span>
                                        </Link>
                                    </td>
                                    <td className="p-6 text-md text-base">
                                     Laptop
                                    </td>
                                    <td className="p-6 text-md text-base">
                                    Laptop
                                    </td>
                                    <td className="p-6 text-md text-base">
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
                <Button name="글 쓰기"  size="md"/>
            </div>
            <PaginationItem/>
        </>
    );
}

export const getStaticProps = async () => {
    const res = await axios({
        url : `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    const datas = await res.data;

    return {
        props: {
            datas
        },
        revalidate: 20
    }
}

Magazine.layout = DefaultsLayout;