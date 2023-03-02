import DefaultsLayout from "@/layouts/defaults";
import PageTitle from "@/components/global/page-title";
import FormInput from "@/components/global/form-input";
import FormTextarea from "@/components/global/form-textarea";
import FormDatepicker from "@/components/global/form-datepicker";
import FormFile from "@/components/global/form-file";
import Button from "@/components/global/button";
import FormCheckboxGroup from "@/components/global/form-checkbox-group";
import {useState} from "react";
import FormSelect from "@/components/global/form-select";

export default function WorksDetail() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    function handleCheckboxGroupChange(newSelectedOptions) {
        setSelectedOptions(newSelectedOptions);
    }
    const awardSelect = [
        { label: '웨어러블', value: 'option1' },
        { label: '모바일 앱', value: 'option2' },
        { label: '모바일 웹', value: 'option3' },
        { label: 'PC 웹', value: 'option4' },
        { label: '유지/운영', value: 'option5' },
        { label: '리뉴얼', value: 'option6' },
        { label: '신규구축', value: 'option7' },
        { label: '컨설팅', value: 'option8' },
        { label: '태블릿 앱', value: 'option9' },
        { label: '기타', value: 'option10' },
    ];
    const options = [
        { label: '웨어러블', value: 'option1' },
        { label: '모바일 앱', value: 'option2' },
        { label: '모바일 웹', value: 'option3' },
        { label: 'PC 웹', value: 'option4' },
        { label: '유지/운영', value: 'option5' },
        { label: '리뉴얼', value: 'option6' },
        { label: '신규구축', value: 'option7' },
        { label: '컨설팅', value: 'option8' },
        { label: '태블릿 앱', value: 'option9' },
        { label: '기타', value: 'option10' },
    ];
    return (
        <div>
            <PageTitle title="Works 관리"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white">
                <form>
                    <div className="my-6">
                        <h4 className="text-lg font-semibold">기본정보</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="grid gap-6 mb-6 grid-cols-[3fr,1fr]">
                                <FormInput name="project_title" placeholder="프로젝트 타이틀" label="프로젝트 타이틀"/>
                                <FormDatepicker  name="date" label="릴리즈일자"/>
                            </div>
                            <div className="grid gap-6 mb-6 grid-cols-[3fr,1fr]">
                                <FormInput name="project_title" placeholder="프로젝트명" label="프로젝트명"/>
                                <FormInput name="client_title" placeholder="클라이언트명" label="클라이언트명"/>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <FormInput name="font_color" placeholder="목록폰트색상" label="목록폰트색상"/>
                                <FormInput name="detail_font_color" placeholder="상세폰트색상" label="상세폰트색상"/>
                            </div>

                            <div className="mb-6">
                                <FormCheckboxGroup
                                    checkboxes={options}
                                    label="프로젝트 타입"
                                    onChange={handleCheckboxGroupChange}
                                />
                                <p>Selected options: {selectedOptions.join(', ')}</p>
                            </div>
                        </div>

                    </div>
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
                    <div className="mt-6">
                        <FormFile label="KV PC BIG 이미지"/>
                    </div>
                    <div className="mt-6">
                        <FormFile label="KV MO BIG 이미지"/>
                    </div>
                    <div className="mt-6">
                        <FormFile label="KV PC SMALL 이미지"/>
                    </div>
                    <div className="mt-6">
                        <FormFile label="KV MO SMALL 이미지"/>
                    </div>
                    <div className="mt-6">
                        <FormFile label="KV PC DETAIL 이미지"/>
                    </div>
                    <div className="mt-6">
                        <FormFile label="KV MO DETAIL 이미지"/>
                    </div>
                    <div className="my-6">
                        <h4 className="text-lg font-semibold">어워드</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="grid gap-6 mb-6 grid-cols-2">
                                <FormSelect name="project_title" placeholder="프로젝트 타이틀" label="프로젝트 타이틀"/>
                                <FormDatepicker  name="date" label="릴리즈일자"/>
                            </div>
                        </div>

                    </div>
                    <div className="mt-6">
                        <FormInput name="pc_title" placeholder="PC 제목을 입력하세요." label="PC 제목"/>
                    </div>
                    <div className="mt-6">
                        <FormInput name="mo_title" placeholder="MO 제목을 입력하세요."  label="MO 제목"/>
                    </div>
                    <div className="mt-6">
                        <FormTextarea name="desc" placeholder="설명을 입력하세요."  label="설명"/>
                    </div>
                    <div className="mt-6">
                        <FormTextarea name="desc" placeholder="본문을 입력하세요." rows="20" label="본문"/>
                    </div>
                    <div className="grid gap-6 mt-6 md:grid-cols-2">
                        <FormInput name="department" placeholder="작성자 부서명" label="작성자 부서명"/>
                        <FormDatepicker  name="date" label="작성일자" placeholderText="작성일자 선택"/>
                    </div>
                    <div className="grid gap-6 mt-6 md:grid-cols-2">
                        <FormInput name="position" placeholder="작성자 직책" label="작성자 직책"/>
                        <FormInput name="name" placeholder="작성자명" label="작성자명"/>
                    </div>
                    <div className="flex justify-end mt-6 space-x-2">
                        <Button name="업로드 하기" size="md"/>
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

WorksDetail.layout = DefaultsLayout;