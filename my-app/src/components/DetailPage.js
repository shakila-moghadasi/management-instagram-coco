import React, { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import '../css/DetailPage.scss';

export default function DetailPage() {
  const id = useLocation();
  const [data , setdata] = useState([]);

  const arraydata = Object.values(data);

  useEffect(() => {
    axios.get(`https://new-api.coco.gl/dashboard/intw/detail/${id.state.instagramId}`)
    .then((res) => {setdata(res.data)})
    .catch((err) => {alert(err.response.statusText);
     });
  } , [] );


  return (
          <div className='detail'>
            <div>
              <div className='profileid'>
                <img
                  className='img'
                  src={`${arraydata[4]}`}
                  loading="lazy"
                />
                <div className='boxidnamedetail'>
                  <p className='iddetail'>@{arraydata[1]}</p>
                  <b className='namedetail'>{arraydata[0]}</b>
                </div>
              </div>
              <div className='fallowers'>
                <div>
                  <b className='space'>Fallowers</b>
                  <AiOutlineQuestionCircle/>
                </div>
                <b className='secondp'>{`${(arraydata[2]/1000).toFixed(2)}k`}</b>
              </div>
              <div className='fallowing'>
                <div>
                  <b className='space'>Fallowing</b>
                  <AiOutlineQuestionCircle/>
                </div>
                <b className='secondp'>{arraydata[3]}</b>
              </div>
            </div>
            <div>
              <div className='periodrate'>
                <div>
                  <b className='space'>Period Eng Rate</b>
                  <AiOutlineQuestionCircle/>
                </div>
                <b className='secondp'>{`${(arraydata[6]*100).toFixed(2)}%`}</b>
              </div>
              <div className='totalrate'>
                <div>
                  <b className='space'>Total Eng Rate</b>
                  <AiOutlineQuestionCircle/>
                </div>
                <b className='secondp'>{`${(arraydata[7]*100).toFixed(2)}%`}</b>
              </div>
            </div>
            <div className='post'>
              <b className='npostday'>{arraydata[10]}</b>
              <div>
                <b className='space'>Post Per Day</b>
                <AiOutlineQuestionCircle/>
              </div>
              <div className='totalpost'>
                <b className='space'>Total Posts</b>
                <AiOutlineQuestionCircle/>
              </div>
              <b className='ntotalpost'>{arraydata[11]}</b>
            </div>
            <div>
              <div className='likes'>
                <div>
                  <b className='space'>Avg Likes</b>
                  <AiOutlineQuestionCircle/>
                </div>
                <b className='secondp'>{`${(arraydata[9]/1000).toFixed(2)}k`}</b>
              </div>
              <div className='comments'>
                <div>
                  <b className='space'>Avg Comments</b>
                  <AiOutlineQuestionCircle/>
                </div>
                <b className='secondp'>{arraydata[8]}</b>
              </div>
            </div>
          </div>
  )
}
