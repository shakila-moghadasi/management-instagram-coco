import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';
import axios from 'axios';
import "../css/ListPage.scss";

export default function ListPage() {
  const [ engaged , setengaged ] = useState([]);
  const [ followers , setfollowers ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`https://new-api.coco.gl/dashboard/intw/top/engaged`)
      .then((res) => {setengaged(res.data)})
      .catch((err) => {alert(err.response.statusText);
       });
  } , [] );

  console.log(engaged);

  useEffect(() => {
    axios.get(`https://new-api.coco.gl/dashboard/intw/top/followers`)
    .then((res) => {setfollowers(res.data)})
    .catch((err) => {alert(err.response.statusText);
     });
  } , [] );

  console.log(followers);

  return (
      <div className='outside'>
        <title>
          <b> Top Engaged </b>
          <b> Top Followers </b>
        </title>
        <div className='inside'>
          <ul>
              {engaged.map((record) => {
                  return(
                    <li 
                      onClick={() => {
                        navigate( '/Detail' , {state:{ instagramId:record.instagramId }} )
                      }
                    }>
                        <img
                            className='profile'
                            src={`${record.profilePicUrl}`}
                            loading="lazy"
                        />
                        <div className='boxidname'>
                          <p className='id'>@{record.instagramId}</p>
                          <p className='name'>{record.fullName}</p>
                        </div>
                        <div className='parentcategory'>
                          <img className='icon' src={`${record.parentIconUrl}`}/>
                          <p className='pcategory'>{record.parentCategory}</p>
                        </div>
                        <div className='category'>
                          <p className='pcategory'>{record.category}</p>
                        </div>
                        <div className='dotsicon'>
                          <SlOptionsVertical/> 
                        </div>
                    </li>
                  )}
              )}
          </ul>
          <ul>
              {followers.map((record) => {
                  return(
                    <li
                      onClick={() => {
                        navigate( '/Detail' , {state:{ instagramId:record.instagramId }} )
                      }
                      }>
                        <img
                            className='profile'
                            src={`${record.profilePicUrl}`}
                            loading="lazy"
                        />
                        <div className='boxidname'>
                          <p className='id'>@{record.instagramId}</p>
                          <p className='name'>{record.fullName}</p>
                        </div>
                        <div className='parentcategory'>
                          <img className='icon' src={`${record.parentIconUrl}`}/>
                          <p className='pcategory'>{record.parentCategory}</p>
                        </div>
                        <div className='category'>
                          <p className='pcategory'>{record.category}</p>
                        </div>
                        <div className='dotsicon'>
                          <SlOptionsVertical/> 
                        </div>
                    </li>
                  )}
              )}
          </ul>
        </div>
      </div>
  )
}
