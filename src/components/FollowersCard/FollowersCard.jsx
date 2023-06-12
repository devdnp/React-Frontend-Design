import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is follwing you ?</h3>

        {Followers.map((Followers,id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={Followers.img} alt="" className='followerImg' />
                        <div className="name">
                            <span>{Followers.name}</span>
                            <span>@{Followers.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard