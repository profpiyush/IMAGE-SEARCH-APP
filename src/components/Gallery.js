import React, { useState, useEffect } from 'react'
import { getSearchedImages, getTrendingImages } from '../api/Api'
import Image from './Image'
import Masonry from 'react-masonry-component'
import "../style.css"

const Gallery = ({ query }) => {
    const [ImgList, setImgList] = useState([]);
    useEffect(() => {
        getTrendingImages().then((data) => {
            //console.log(data)
            setImgList(data)
        });
    }, []);

    useEffect(() => {
        if (query.trim() === "") return;
        async function fetchData() {
            const data = await getSearchedImages(query);
            console.log(data);
            setImgList(data);
        }
        fetchData();
    }, [query])

    return (
        <div>
            <Masonry className="container" options={{ isFitWidth: true }}>
                {ImgList.map((img) => {
                    return (
                        <Image urls={img.urls} key={img.id} width="250" />
                    )
                })}
            </Masonry>
        </div>
    )
}

export default Gallery
