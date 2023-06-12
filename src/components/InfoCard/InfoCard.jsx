import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal.jsx/ProfileModal'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your info</h4>
            <div>
                <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />

                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            </div>
            
        </div>

        <div className="Info">
            <span><b>Status</b></span>
            <span> in meeting</span>
        </div>
        <div className="Info">
            <span><b>Lives</b></span>
            <span> in Bharat</span>
        </div>
        <div className="Info">
            <span><b>Works</b></span>
            <span> at SoftoNation</span>
        </div>

        <button className="button logout-button">
            Logout
        </button>
    </div>
  )
};

export default InfoCard;