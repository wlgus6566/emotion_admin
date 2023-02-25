import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DefaultsLayout from "@/layouts/defaults";
import Magazine from "@/pages/magazine/index";

export default function MagazineDetail({data}) {
    const router = useRouter();
    console.log(router)
    return (
        <div style={{ textAlign: "center" }}>
            sdsdsdsdsd
            <h2>{data.title}</h2>
       {/*     <Image src={photo.url} alt={photo.title} width={500} height={500} />*/}
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