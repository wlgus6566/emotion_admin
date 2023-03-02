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
    const awardOptions = [
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

    const [formData, setFormData] = useState({
        projectTitle: '',
        releaseDate: '',
        projectName: '',
        clientName: '',
        listFontColor: '',
        detailFontColor: '',
        projectType: [],
        kvPCBigImg: [],
        kvMOBigImg: [],
        kvPCSmallImg: [],
        kvPCDetailImg: [],
        kvMODetailImg: [],
        awardOptions: [],
        date: new Date(),
        position: '',
        writer: '',
    });
    const handleFormChange = (val, name) => {
        setFormData({...formData, [name]: val})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        //resetForm()
    };

    const resetForm = () => {
        setFormData({
            pcTitle: '',
            moTitle: '',
            desc: '',
            contentsImgFiles: [],
            contentsHtml: '',
            department: '',
            date: new Date(),
            position: '',
            writer: '',
            pcIndexImg: [],
            moIndexThumbImg: [],
            pcBodyImg: [],
            moBodyImg: [],
            pcWriterImg: [],
            moWriterImg: [],
        });
    }

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
                                    checkboxes={awardOptions}
                                    label="프로젝트 타입"
                                    onChange={handleCheckboxGroupChange}
                                />
                                <p>Selected options: {selectedOptions.join(', ')}</p>
                            </div>
                        </div>

                    </div>
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
                    <div className="my-20">
                        <h4 className="text-lg font-semibold">어워드</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="grid gap-6 mb-6 grid-cols-2">
                                <FormSelect
                                    name="award_list"
                                    onChange={(e) => handleFormChange(e, 'awardList')}
                                    options={awardOptions}
                                    label="어워드"
                                />
                                <FormInput
                                    name="award_txt"
                                    placeholder="어워드 상세"
                                    label="어워드 상세"
                                />
                            {/*    <FormDatepicker  name="date" label="릴리즈일자"/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="my-20">
                        <h4 className="text-lg font-semibold">프로젝트 상세</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="grid gap-6 mb-6 grid-cols-2">
                                <FormInput
                                    name="project_title1"
                                    placeholder="타이틀1"
                                    label="타이틀1"
                                />
                                <FormInput
                                    name="project_title2"
                                    placeholder="타이틀2"
                                    label="타이틀2"
                                />
                            </div>
                            <div className="mt-6">
                                <FormTextarea name="contents" placeholder="본문을 입력하세요."  label="본문"/>
                            </div>
                            <div className="grid gap-6 mt-6 md:grid-cols-2">
                                <FormInput name="font_color" placeholder="폰트색상" label="폰트색상"/>
                                <FormInput name="bg_color" placeholder="배경색상" label="배경색상"/>
                            </div>
                            <div className="mt-6">
                                <FormInput name="pc_title" placeholder="유튜브 URL" label="유튜브 URL"/>
                            </div>
                            <div className="mt-6">
                                <FormFile
                                    label="필드 이미지"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="my-20">
                        <h4 className="text-lg font-semibold">인터뷰</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="mt-6">
                                <FormTextarea
                                    name="interviewContents"
                                    placeholder="내용"
                                    label="내용"
                                />
                            </div>
                            <div className="mt-6">
                                <FormFile
                                    label="PC 이미지"
                                />
                            </div>
                            <div className="mt-6">
                                <FormFile
                                    label="MO 이미지"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="my-20">
                        <h4 className="text-lg font-semibold">투입인원</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="grid gap-6 mb-6 grid-cols-2">
                                <FormInput name="inputPosition" placeholder="포지션" label="포지션"/>
                                <FormInput name="inputName" placeholder="이름" label="이름"/>
                            </div>
                        </div>

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