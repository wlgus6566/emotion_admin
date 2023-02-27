import {useState} from 'react'

export default function FormFile({label}) {
    const [files, setFiles] = useState(null)
    const [showImages, setShowImages] = useState([])
    const handleUpload = async (event) => {
        if (event.target.files) {
            setFiles(event.target.files[0])
        }

        const formData = new FormData()
        if (files) {
            formData.append('file', files)
        }

        const result = await fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'post',
            body: formData,
            headers: {
                authorization:
                    'Bearer zmk1g6n0xia2eq8f6pdy8rxrgwcjzs.d7iec3dk41357xcbqno59m8tnzf671pv5hz1ghtgiy33xujmk0.54da9zfdt5fgrtwr0hyb3o5loqjsqb',
            },
        })
            .then((res) => res.json())
            .then((body) => body.url)

        if (result) setShowImages([...showImages, result])
    }

    const handleDelete = (idx) => {
        setShowImages([
            ...showImages.slice(0, idx),
            ...showImages.slice(idx + 1, showImages.length)
        ])
    }

    return (
        <div>
            <label htmlFor="a"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label} </label>
            <input type="file"
                   accept="image/*"
                   id="a"
                   onChange={handleUpload}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                                      file:mr-4 file:py-2 file:px-4
                                                      file:rounded-md file:border-0
                                                      file:text-sm file:font-semibold
                                                      file:bg-blue-500 file:text-white
                                                      hover:file:bg-blue-600 "/>

            {showImages.map((src, idx) => {
                return (
                    <div>
                        <image src={src} alt={`${src}`} />
                        <button onClick={() => handleDelete(idx)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}
