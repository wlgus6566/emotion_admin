import DefaultsLayout from "@/layouts/defaults";
import PageTitle from "@/components/global/page-title";
import FormInput from "@/components/global/form-input";
import FormTextarea from "@/components/global/form-textarea";
import FormDatepicker from "@/components/global/form-datepicker";
import FormFile from "@/components/global/form-file";
import Button from "@/components/global/button";
import FormCheckboxGroup from "@/components/global/form-checkbox-group";
import {useCallback, useState} from "react";
import FormSelect from "@/components/global/form-select";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WorksDetail() {
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
        clientName: '', //클라이언트명
        launchingDt: new(Date),
        projectName: '', //프로젝트 타이틀
        projectTypeCode: [],
        serviceName: '', //프로젝트명
        listFontColor: '',
        detailFontColor: '',
        useYn: 'Y',
        sortingOrder: 1,
        keyVisualBigImageFile: {
            pcImage: {},
            moImage: {},
            keyVisualType: "KVT_DETAIL"
        },
        keyVisualSmallImageFile: {
            pcImage: {},
            moImage: {},
            keyVisualType: "KVT_DETAIL"
        },
        awardList: [
            {
                "awardPrize": "",
                "awardSeq": 11,
            }
        ],
        fieldList: [
            {
                backgroundColor: "",
                contents: "",
                fieldTypeCode: "",
                fontColor: "",
                titleOne: "",
                titleTwo: "",
                youtubeUrl: "",
                },
        ],
        interview: {
            pcImage: {
            },
            moImage: {
            },
            contents: "",
        },
        creditList: [
            {
                name: '',
                position: ''
            }
        ]
    });
    const handleArrayChange = (val, depth1, depth2, index, depth3) => {
        if(val) {
            if(depth3) {
                [...formData[depth1]][index][depth2] = {...formData[depth1][index][depth2],[depth3]: val[0]};
                setFormData( { ...formData})
                return
            }
            [...formData[depth1]][index][depth2] = val;
            setFormData( { ...formData})
        }
    }

    const onAddOrDelete = (keyName, index) => {
        if(index) { //delete
            const findIndex = formData[keyName].findIndex((el,idx) => idx === index)
            let arr = [...formData[keyName]]
            arr.splice(findIndex, 1)
            const newFormData = { ...formData, [keyName]: arr };
            setFormData(newFormData)
        } else { //add
            let arr = [...formData[keyName]]
            switch (keyName) {
                case 'awardList':
                    arr.push( {
                        "awardPrize": "",
                        "awardSeq": 11,
                    })
                    break;
                case 'fieldList':
                    arr.push({
                        backgroundColor: "",
                        contents: "",
                        fieldTypeCode: "",
                        fontColor: "",
                        titleOne: "",
                        titleTwo: "",
                        youtubeUrl: "",
                    })
                    break;
                case 'creditList':
                    arr.push({
                        name: '',
                        position: ''
                    })
                    break;
                default:
                    alert(keyName, "어떤 값인지 파악이 되지 않습니다." );
            }
            setFormData({ ...formData, [keyName]: arr })
        }
    }

    /*
    * {
  "clientName": "SK텔레콤",
  "launchingDt": 23.01,
  "serviceName": "다양한 신규 서비스로 새로워진",
  "projectTypeCode": "PJT_CONSTRUCTION",
  "serviceName": "T 다이렉트샵",
  "listFontColor": "#fff",
  "detailFontColor": "#fff",
  "useYn": "Y",
  "sortingOrder": 1,
  "keyVisualBigImageFile": {
    "pcImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "moImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "keyVisualType": "KVT_DETAIL"
  },
  "keyVisualSmallImageFile": {
    "pcImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "moImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "keyVisualType": "KVT_DETAIL"
  },
  "keyVisualDetailImageFile": {
    "pcImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "moImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "keyVisualType": "KVT_DETAIL"
  },
  "awardList": [
    {
      "awardPrize": "스마트앱어워드 코리아 2021 브랜드쇼핑몰 분야 대상",
      "awardSeq": 11
    }
  ],
  "fieldList": [
    {
      "backgroundColor": "#000",
      "contents": "고객 관점에서 불필요한 단계를 줄이고 온라인에서 손쉽게 <br>가입/개통할",
      "fieldTypeCode": "FDT_DESIGN",
      "fontColor": "#fff",
      "titleOne": "쉽고 빠르게 결제와 할인까지!",
      "titleTwo": "쉽고 빠르게 결제와 할인까지!",
      "youtubeUrl": "http://www.example.co.kr",
      "fieldImageFile": {
        "pcImage": {
          "fileName": "image.png",
          "fileSize": 77738,
          "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
          "fileExtensionName": "image/jpeg",
          "delYn": false,
          "fileSeq": 1
        },
        "moImage": {
          "fileName": "image.png",
          "fileSize": 77738,
          "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
          "fileExtensionName": "image/jpeg",
          "delYn": false,
          "fileSeq": 1
        },
      }
    },
   ],
  "interview": {
    "pcImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "moImage": {
      "fileName": "image.png",
      "fileSize": 77738,
      "filePath": "/tmp/a2e6aef2-30a3-4e85-af6e-a164f967a904.jpg",
      "fileExtensionName": "image/jpeg",
      "delYn": false,
      "fileSeq": 1
    },
    "contents": "서비스 이용 연령층이 학습을 시작하는 초등 저학년부터 자기 주도적인 학습이 가능한 중등까지 넓은 점을 고려하여 다양한 연령층이 재미있고 효과적인 학습을 할 수 있도록 콘텐츠 기획부터 UI디자인까지 많은 아이디어와 고민을 한 프로젝트였습니다.",
    "moImageFileName": "08_project_interview.jpg",
    "moImagePhysicalName": "/upload/WORKS/MO/2017/T-pay/08_project_interview.png",
    "pcImageFileName": "10_project_interview.png",
    "pcImagePhysicalName": "/upload/WORKS/PC/2017/T-pay/10_project_interview.png"
  },
  "creditList": [
    {
      "name": "홍길동",
      "position": "PM"
    }
  ]
}*/




    const handleFormChange = useCallback((val, depth1, depth2) => {
        if(depth2) {
            setFormData({...formData, [depth1]: {...formData[depth1], [depth2]: val}})
            return
        }
        setFormData({...formData, [depth1]: val})
    }, [formData]);



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <PageTitle title="Works 관리"/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white">
                <form>
                    <div className="my-6">
                        <h4 className="text-lg font-semibold">기본정보</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="grid gap-6 mb-6 grid-cols-[3fr,1fr]">
                                <FormInput
                                    name="projectName"
                                    onChange={(e) => handleFormChange(e, 'projectName')}
                                    placeholder="프로젝트 타이틀"
                                    label="프로젝트 타이틀"/>
                                <FormDatepicker
                                    value={formData.launchingDt}
                                    onChange={(e) => handleFormChange(e, 'launchingDt')}
                                    name="launchingDt"
                                    label="릴리즈일자"
                                    placeholderText="릴리즈일자 선택"
                                />
                            </div>
                            <div className="grid gap-6 mb-6 grid-cols-[3fr,1fr]">
                                <FormInput
                                    value={formData.serviceName}
                                    onChange={(e) => handleFormChange(e, 'serviceName')}
                                    name="serviceName"
                                    placeholder="프로젝트명"
                                    label="프로젝트명"
                                />
                                <FormInput
                                    value={formData.clientName}
                                    onChange={(e) => handleFormChange(e, 'clientName')}
                                    name="clientName"
                                    placeholder="클라이언트명"
                                    label="클라이언트명"
                                />
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <FormInput
                                    value={formData.listFontColor}
                                    onChange={(e) => handleFormChange(e, 'listFontColor')}
                                    name="listFontColor"
                                    type="color"
                                    placeholder="목록폰트색상"
                                    label="목록폰트색상"
                                />
                                <FormInput
                                    value={formData.detailFontColor}
                                    onChange={(e) => handleFormChange(e, 'detailFontColor')}
                                    name="detailFontColor"
                                    type="color"
                                    placeholder="상세폰트색상"
                                    label="상세폰트색상"
                                />
                            </div>

                            <div className="mb-6">
                                <FormCheckboxGroup
                                    checkboxes={awardOptions}
                                    label="프로젝트 타입"
                                    onChange={(e) => handleFormChange(e, 'projectTypeCode')}
                                />

                            </div>
                        </div>

                    </div>
                    <div className="mt-6">
                        <FormFile
                            value={formData.kvPCBigImg}
                            onChange={(e) => handleFormChange(e, 'keyVisualBigImageFile', 'pcImage')}
                            multiple={false}
                            label="KV PC BIG 이미지"
                        />
                    </div>
                    <div className="mt-6">
                        <FormFile
                            value={formData.kvMOBigImg}
                            onChange={(e) => handleFormChange(e, 'keyVisualBigImageFile','moImage')}
                            multiple={false}
                            label="KV MO BIG 이미지"
                        />
                    </div>
                    <div className="mt-6">
                        <FormFile
                            value={formData.kvPCSmallImg}
                            onChange={(e) => handleFormChange(e, 'keyVisualSmallImageFile','pcImage')}
                            multiple={false}
                            label="KV PC SMALL 이미지"
                        />
                    </div>
                    <div className="mt-6">
                        <FormFile
                            value={formData.kvPCDetailImg}
                            onChange={(e) => handleFormChange(e, 'keyVisualSmallImageFile','moImage')}
                            multiple={false}
                            label="KV PC DETAIL 이미지"
                        />
                    </div>
                    <div className="mt-6">
                        <FormFile
                            value={formData.kvMODetailImg}
                            onChange={(e) => handleFormChange(e, 'kvMODetailImg')}
                            multiple={false}
                            label="KV MO DETAIL 이미지"
                        />
                    </div>
                    <div className="my-20">
                        <h4 className="text-lg font-semibold">어워드</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            {formData.awardList && formData.awardList.map((item, index)=> (
                                    <div key={index} className="grid gap-6 mb-6 grid-cols-[10fr,1fr]">
                                        <FormInput
                                            name="awardPrize"
                                            onChange={(value) => handleArrayChange(value, 'awardList','awardPrize', index)}
                                            placeholder="어워드 상세"
                                            label="어워드 상세"
                                        />
                                        {
                                            (index === formData.awardList.length - 1 && index !== 0) &&
                                            <button
                                                className="border rounded-full w-8 h-8 mt-8"
                                                onClick={() => onAddOrDelete('awardList', index)}
                                                type="button"
                                            >
                                                <FontAwesomeIcon icon={faMinus} className=""/>
                                            </button>
                                        }
                                    </div>
                                ))
                            }
                            <div className="flex items-end w-50 h-50 mb-3">
                                <div>
                                    <Button onClick={() => onAddOrDelete('awardList')} type="button" size='sm' name="추가"/>
                                </div>
                              {/*  <button
                                    className=""
                                    onClick={() => onAddAwardDiv()}
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>*/}
                            </div>
                        </div>

                    </div>

                    {/* -----프로젝트 상세----- */}

                    <div className="my-20  py-4">
                        <h4 className="text-lg font-semibold">프로젝트 상세</h4>

                        {formData.fieldList && formData.fieldList.map((item, index) => (
                            <div key={index} className="p-4 my-4 border-t-2 border-t-black">
                                {
                                    index >= 1 && <div className="flex justify-end">
                                        <Button
                                            onClick={() => onAddOrDelete('fieldList',index)}
                                            type="button"
                                            size='sm'
                                            name={`삭제${index}`}/>
                                    </div>
                                }

                                <div className="grid gap-6 mb-6 grid-cols-2">
                                    <FormInput
                                        name="titleOne"
                                        onChange={(value) => handleArrayChange(value,'fieldList', 'titleOne', index)}
                                        placeholder="타이틀1"
                                        label="타이틀1"
                                    />
                                    <FormInput
                                        name="titleTwo"
                                        onChange={(value) => handleArrayChange(value,'fieldList', 'titleTwo', index)}
                                        placeholder="타이틀2"
                                        label="타이틀2"
                                    />
                                </div>
                                <div className="mt-6">
                                    <FormTextarea
                                        name="contents"
                                        onChange={(value) => handleArrayChange(value,'fieldList', 'contents', index)}
                                        placeholder="본문을 입력하세요."
                                        label="본문"/>
                                </div>
                                <div className="grid gap-6 mt-6 md:grid-cols-2">
                                    <FormInput
                                        name="fontColor"
                                        onChange={(value) => handleArrayChange(value,'fieldList', 'fontColor', index)}
                                        placeholder="폰트색상"
                                        label="폰트색상"/>
                                    <FormInput
                                        name="backgroundColor"
                                        onChange={(value) => handleArrayChange(value,'fieldList', 'backgroundColor', index)}
                                        placeholder="배경색상"
                                        label="배경색상"/>
                                </div>
                                <div className="mt-6">
                                    <FormInput
                                        name="youtubeUrl"
                                        onChange={(value) => handleArrayChange(value,'fieldList', 'youtubeUrl', index)}
                                        placeholder="유튜브 URL"
                                        label="유튜브 URL"
                                    />
                                </div>
                                <div className="mt-6">
                                    <div className="mt-6">
                                        <FormFile
                                            onChange={(value) => handleArrayChange(value,'fieldList', 'fieldImageFIle', index, 'pcImage')}
                                            label="PC 이미지"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <FormFile
                                            onChange={(value) => handleArrayChange(value,'fieldList', 'fieldImageFIle', index, 'moImage')}
                                            label="MO 이미지"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div>
                            <Button onClick={() => onAddOrDelete('fieldList')} type="button" size='sm' name="추가"/>
                        </div>
                    </div>
                    {/* //----프로젝트 상세---- */}

                    {/* -----인터뷰----- */}
                    <div className="my-20">
                        <h4 className="text-lg font-semibold">인터뷰</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            <div className="mt-6">
                                <FormTextarea
                                    name="contents"
                                    onChange={(val) => handleFormChange(val, 'interview', 'contents')}
                                    placeholder="내용"
                                    label="내용"
                                />
                            </div>
                            <div className="mt-6">
                                <FormFile
                                    onChange={(val) => handleFormChange(val[0], 'interview', 'pcImage')}
                                    label="PC 이미지"
                                />
                            </div>
                            <div className="mt-6">
                                <FormFile
                                    onChange={(val) => handleFormChange(val[0], 'interview', 'moImage')}
                                    label="MO 이미지"
                                />
                            </div>
                        </div>

                    </div>
                    {/* //-----인터뷰----- */}

                    <div className="my-20">
                        <h4 className="text-lg font-semibold">투입인원</h4>
                        <div className="border-y-2 border-y-black p-4 my-4">
                            {formData.creditList && formData.creditList.map((item, index)=> (

                                    <div key={index} className="grid gap-6 mb-6 grid-cols-[10fr,10fr,1fr]">
                                            <FormInput
                                            name="name"
                                            onChange={(val) => handleArrayChange(val,'creditList','name',index)}
                                            placeholder="포지션"
                                            label="포지션"
                                            />
                                            <FormInput
                                            name="inputName"
                                            onChange={(val) => handleArrayChange(val,'creditList','position',index)}
                                            placeholder="이름"
                                            label="이름"
                                            />
                                        {
                                            (index === formData.creditList.length - 1 && index !== 0) &&
                                            <button
                                                className="border rounded-full w-8 h-8 mt-8"
                                                onClick={() => onAddOrDelete('creditList', index)}
                                                type="button"
                                            >
                                                <FontAwesomeIcon icon={faMinus} className=""/>
                                            </button>
                                        }
                                    </div>
                                ))
                            }
                            <div>
                                <Button onClick={() => onAddOrDelete('creditList')} type="button" size='sm' name="추가"/>
                            </div>
                        </div>

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

WorksDetail.layout = DefaultsLayout;