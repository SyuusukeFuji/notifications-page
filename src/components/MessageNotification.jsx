import React,{useState, useEffect} from "react";
function MessageNotification({friendPicture,friendName, notiDescription, notiEvent, notiDate, message, isRead}){

    const readStatus= isRead;



    return(
        <section id="message-notification-wrap" className="notification-wrap">
            <section id="top-sections-wrap">
                <section id="top-left" className="top-left-section">
                    <img id="message-noti-profile" className="profile-pic" src={friendPicture} alt="A person's profile picture" />
                </section>
                <section id="top-center" className="top-center-section">
                    <p className="notification-text"><a href="#" className="name-link">{friendName}</a>{notiDescription}<a href="#" className="eventLink">{notiEvent}</a>{isRead ? <span className="unread-dot">•</span> : <span></span> }</p>
                    <p className="notification-time">{notiDate}</p>
                    
                </section>
            </section>

            <section id="bottom-sections-wrap">
                <section id="bottom-left" className="bottom-left-section"></section>
                <section id="bottom-center" className="bottom-center-section">
                    <a href="#" className="messageLink">
                        <section id="message-wrap">
                            <p className="notification-message">{message}</p>
                        </section>
                    </a>
                </section>
                
            </section>
            

        </section>
    )
}

export default MessageNotification;