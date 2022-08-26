import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShinsegaeTimeDealItem from "../ui/NewServiceItem"
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import TempResponse from "../../../datas/ShinsegaeTimeDealSlideData.json"




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import '../../../css/components/NewServiceItemSlider.css';

import MainTitleUi from '../ui/MainTitleUi';
import SubTitleUi from '../ui/SubTitleUi';


function NewServiceItemSlider() {

    const [slideData, setSlideData] = useState([])
    const url = "http://10.10.10.127:9000/api/slide/img"
    useEffect(() => {
        axios.get(url, {timeout:1000}).then(Response => {
            setSlideData(Response.data)
        })
        .catch(error => {
            setSlideData(TempResponse)
          })
    },[])

    // const [slideData, setSlideData] = useState([])
    // const url = "http://10.10.10.127:9000/api/ctg/main-detail"
    // useEffect(() => {
    //     axios.get(url).then(Response => {
    //         console.log(Response);
    //         setSlideData(Response.data)
    //     })
    // },[])

    return ( 
        <Swiper
            modules={[Autoplay, Scrollbar]}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            scrollbar={{ draggable: false }}
        >
            
            {
                slideData && slideData.map(item=>(
                    <SwiperSlide key={item.id}>
                        <Link to="/">
                            <img src={item.url} />
                            <MainTitleUi title={item.text1} />
                            <SubTitleUi title={item.text2} />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default NewServiceItemSlider;