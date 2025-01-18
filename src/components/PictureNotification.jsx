import React,{useState} from "react";
function PictureNotification({friendPicture, friendName, notiDescription, notiEvent, notiDate, notiPicture, isRead}){
    const readStatus= isRead;
    return(
        <section id="picture-notification-wrap" className="horizontal-notification-wrap">
            <section className="left-section">
                <img className="profile-pic" src={friendPicture} alt="a person's profile picture" />
            </section>
            <section className="center-section">
                <p className="notification-text"><a href="#" className="name-link">{friendName}</a>{notiDescription}{isRead ? <span className="unread-dot">•</span> : <span></span> }</p>
                <p className="notification-time">{notiDate}</p>
            </section>
            <section className="right-section">
                <a className="pictureLink" href="#"><img className="posted-picture-thumb" src={notiPicture} alt="small version of posted picture" /></a>
            </section>
        </section>
    )
}

export default PictureNotification;