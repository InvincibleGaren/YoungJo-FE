import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TitleUi from './MainTitleUi';
import CategoryNav from "../../components/ui/CategoryNav";
import Server from "../../../datas/Server.json";


import dsbidatas from "../../../datas/DSBIDatas";
import "../../../css/components/DepartmentStoreBestItem.css"

function DepartmentStoreBestItem() {

    const[dsbiData, setDSBIData ] = useState([])

    useEffect(()=> {
        const url = `${Server.baseUrl}api/category/img`

        axios.get(url,{timeout:1000}).then(Response => {
            setDSBIData(Response.data)
        })
        .catch(error => {
            setDSBIData(dsbidatas)
        })
    },[])

    return ( 
        <div className='DepartmentStoreBestItem'>
            <TitleUi title="백화점 Best Items" />
            <CategoryNav />
            <ul className='DSBI'>
                {
                    dsbiData && dsbiData.map(dsbi => (
                        <li key = {dsbi.id}>
                            <div>
                                <img className='priceimg' src = {dsbi.imgUrl} alt = "img"/>
                                <p className='brandname'>{dsbi.brandName}</p>
                                <p className = "textlimit">{dsbi.name}</p>
                                <div className='salepp'><div className='saleprice'>{dsbi.salePrice}원 </div> <div className='salepercent'>{dsbi.salePercent}%</div></div>
                                {/* <p>{dsbi.salePercent}</p> */}
                                <div className='starreview'><p className='star'><img src= {dsbi.star} alt ="img"/>{dsbi.asterion}</p> <p className='review'>{dsbi.numOfReview}건</p></div>
                                {/* <p>{dsbi.numOfReview}</p> */}
                            </div>
                        </li>
                    ))
                }
            
            </ul>
            
        </div>
     );
}

export default DepartmentStoreBestItem;