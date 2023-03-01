import DefaultsLayout from "@/layouts/defaults";
import PageTitle from "@/components/global/page-title";
import FormInput from "@/components/global/form-input";
import FormTextarea from "@/components/global/form-textarea";
import FormDatepicker from "@/components/global/form-datepicker";
import FormFile from "@/components/global/form-file";
import Button from "@/components/global/button";
import FormCheckboxGroup from "@/components/global/form-checkbox-group";
import {useState} from "react";

export default function MagazineDetail({data}) {

    const [formData, setFormData] = useState({
        pcTitle: '',
        moTitle: '',
        desc: '',
        contentsImgFiles: [],
        contentsHtml: '',
        department: '',
        date: '',
        position: '',
        writer: '',
        pcIndexImg: [],
        moIndexThumbImg: [],
        pcBodyImg: [],
        moBodyImg: [],
        pcWriterImg: [],
        moWriterImg: [],
    });

    const [val, setVal] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        resetForm()
    };

    const resetForm = () => {
        setFormData({
            pcTitle: '',
            moTitle: '',
            desc: '',
            contentsImgFiles: [],
            contentsHtml: '',
            department: '',
            date: '',
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
    const handleInputChange = (val2, name) => {
        setFormData({ ...formData, [name]:val2 })
       /* const { name, value, type } = event.target;

        if (type === 'file') {
            const file = event.target.files[0];
            setFormData({ ...formData, [name]: file });
        } else {
            setFormData({ ...formData, [name]: value });
        }*/
    };

    return (
        <div>
            <PageTitle title="Magazine 관리"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <FormInput value={formData.pcTitle} onChange={(e) => handleInputChange(e, 'pcTitle')} name="pcTitle" placeholder="PC 제목을 입력하세요." label="PC 제목"/>
                    </div>
                    <div className="mb-6">
                        <FormInput value={formData.moTitle} onChange={(e) => handleInputChange(e, 'moTitle')}  name="moTitle" placeholder="MO 제목을 입력하세요."  label="MO 제목"/>
                    </div>
                    <div className="mb-6">
                        <FormTextarea value={formData.desc} name="desc" placeholder="설명을 입력하세요."  label="설명"/>
                    </div>

                    <div className="my-20">
                        <h4 className="text-lg font-semibold">본문</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="mb-6">
                                <FormFile value={formData.contentsImgFiles} max="3" multiple={true} label="본문 첨가이미지 *"/>
                            </div>
                            <div className="mb-6">
                                <FormTextarea value={formData.contentsHtml} name="desc" placeholder="본문을 입력하세요." rows="20" label="본문"/>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <FormInput value={formData.department} name="department" placeholder="작성자 부서명" label="작성자 부서명"/>
                        <FormDatepicker value={formData.date} name="date" label="작성일자" placeholderText="작성일자 선택"/>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <FormInput value={formData.position} name="position" placeholder="작성자 직책" label="작성자 직책"/>
                        <FormInput value={formData.writer}  name="writer" placeholder="작성자명" label="작성자명"/>
                    </div>
                    <hr className="my-10"/>

                    {/* 이미지 업로드 */}
                    <div className="mb-6">
                        <FormFile value={formData.moIndexThumbImg} label="MO 목록 썸네일 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile value={formData.pcBodyImg}  label="PC 본문 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile value={formData.moBodyImg} label="MO 본문 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile value={formData.pcWriterImg}  label="PC 작성자 이미지 *"/>
                    </div>
                    <div className="mb-6">
                        <FormFile value={formData.moWriterImg} label="MO 작성자 이미지 *"/>
                    </div>
                    <div className="flex justify-end mt-6 space-x-2">
                        <Button type="submit" name="업로드 하기" size="md"/>
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