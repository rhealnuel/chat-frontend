import React from 'react'

import { AddChannel } from '../assets';

const TeamChannelList = ({setToggleContainer, children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing}) => {
    if(error){
        return type === 'team' ? (
            <div className='team-channel-list' style={{backgroundColor: "#005fff", height: "100%"}}>
                <p className='team-channel-list__message'>
                    connection error please wait a momment and try again.
                </p>
            </div>

        ) : null;
    }

    if(loading) {
        return (
            <div className='team-channel-list'>
            <p className='team-channel-list__message loading'>
                {type === 'team' ? "channels": "messages"}loading...
            </p>
        </div>
        )
    }
  return (
    <div className='team-channel-list' style={{backgroundColor: "#005fff", height: "100%"}}>
        <div className='team-channel-list__header' >
            <p className='team-channel-list__header__title'>
            {type === 'team' ? "channels": "Direct  Messages"}
            </p>
            <AddChannel
             isCreating = {isCreating}
             setIsCreating = {setIsCreating}
             setCreateType = {setCreateType}
             setIsEditing = {setIsEditing}
             type={type === "team"? "team" : "messaging" }
             setToggleContainer={setToggleContainer}
            />


        </div>
        {children}
    </div>
  )
}

export default TeamChannelList