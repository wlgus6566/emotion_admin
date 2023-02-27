import { useRouter } from 'next/router';
import DefaultsLayout from "@/layouts/defaults";
import PageTitle from "@/components/global/page-title";
import FormInput from "@/components/global/form-input";
import FormTextarea from "@/components/global/form-textarea";
import FormDatepicker from "@/components/global/form-datepicker";
import FormFile from "@/components/global/form-file";
import Button from "@/components/global/button";

export default function MagazineDetail({data}) {
    return (
        <div>
            <PageTitle title="Magazine 관리"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white">
                <form>
                    <div className="mb-6">
                        <FormInput name="pc_title" placeholder="PC 제목을 입력하세요." label="PC 제목"/>
                    </div>
                    <div className="mb-6">
                        <FormInput name="mo_title" placeholder="MO 제목을 입력하세요."  label="MO 제목"/>
                    </div>
                    <div className="mb-6">
                        <FormTextarea name="desc" placeholder="설명을 입력하세요."  label="설명"/>
                    </div>
                    <div className="mb-6">
                        <FormTextarea name="desc" placeholder="본문을 입력하세요." rows="20" label="본문"/>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <FormInput name="department" label="작성자 부서명"/>
                        <FormDatepicker  name="date" label="작성일자" placeholderText="작성일자 선택"/>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <FormInput name="position" label="작성자 직책"/>
                        <FormInput name="name" label="작성자명"/>
                    </div>
                    <hr className="my-10"/>
{/*                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                            address</label>
                        <input type="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="john.doe@company.com" required/>
                    </div>*/}
      {/*              <div className="mb-6">
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="•••••••••" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                            password</label>
                        <input type="password" id="confirm_password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="•••••••••" required/>
                    </div>*/}
                    <div className="mb-6">
                        <FormFile label="PC 목록 썸네일 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile label="MO 목록 썸네일 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile label="PC 본문 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile label="MO 본문 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile label="PC 작성자 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile label="MO 작성자 이미지 *"/>
                    </div>
                    <div className="flex justify-end mt-6 space-x-2">
                        <Button name="업로드 하기"/>
                    </div>
                </form>

            </div>
        </div>
    );
}

export const getStaticProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
    const datas = await res.json();
    const ids = datas.map(data => data.id);
    const paths = ids.map(id => { //동적으로 id 생성
        return {
            params: { id: id.toString() } //context
        }
    })

    return {
        paths, //생성된 id를 path에 매칭
        fallback: false //없는 id 입력시 404 에러 출현
    }
}

MagazineDetail.layout = DefaultsLayout;