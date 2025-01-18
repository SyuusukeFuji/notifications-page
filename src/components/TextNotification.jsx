import React,{useState} from "react";
function TextNotification({friendPicture,friendName, notiDescription, notiEvent, notiDate, notiType, isRead, idNum}){
    const unreadStatus= isRead;
    return(
        <section id="text-notification-wrap" className={`horizontal-notification-wrap ${isRead ? "unread" : "read"}`}>
            <section className="left-section" >
                <img id={idNum} className="profile-pic" src={friendPicture} alt="a person's profile picture" />
            </section>
            <section className="center-section">
                <p className="notification-text">
                    <a className="name-link" href="#">{friendName}</a>
                    {notiDescription}<a className={`eventLink ${notiType=="group" ? "group-link" : "post-link"}`} href="#">
                        {notiEvent}</a>
                        {isRead ? <span className="unread-dot">•</span> : <span></span> }
                </p>
                <p className="notification-time">{notiDate}</p>
            </section>
        </section>
    )
}

export default TextNotification;