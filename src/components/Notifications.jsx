import React,{useState, useEffect} from "react";
import TextNotification from "./TextNotification";
import PictureNotification from "./PictureNotification";
import MessageNotification from "./MessageNotification";
import avatarAngela from "../assets/images/avatar-angela-gray.webp";
import avatarAnna from "../assets/images/avatar-anna-kim.webp";
import avatarJacob from "../assets/images/avatar-jacob-thompson.webp";
import avatarKimberly from "../assets/images/avatar-kimberly-smith.webp";
import avatarMark from "../assets/images/avatar-mark-webber.webp";
import avatarNathan from "../assets/images/avatar-nathan-peterson.webp";
import avatarRizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import chessIcon from "../assets/images/image-chess.webp";

function Notifications(){
    const [unreadNumber, setUnreadNumber]= useState();
    const [unreadList, setUnreadList]= useState([true, true, true, false, false, false, false]);

    function markAllAsRead(){
        const allRead= unreadList.map(()=>false);
        setUnreadList(allRead);
        console.log("everything has been marked read");
        console.log("Now unreadList is: " + unreadList);

        
    }

    useEffect(()=>{
        const currentUnread= unreadList.filter(item => item).length;
        setUnreadNumber(currentUnread);
    },[unreadList]);

    return(
        <section id="outer-card">
            
            <header id="notifications-header">
                <h1>Notifications</h1>
                <section id="unread-tile">
                    <p id="unread-notifications">{unreadNumber}</p>
                </section>
                
                <button id="header-button" type="button" onClick={markAllAsRead}>Mark all as read</button>
            </header>
            <ul id="list-of-notifications">
                <li>
                    <TextNotification 
                    friendPicture={avatarMark} 
                    friendName={"Mark Webber "} 
                    notiDescription={"reacted to your recent post "} 
                    notiEvent={"My first tournament today!"} 
                    notiDate={"1m ago"}
                    notiType={"post"}
                    isRead={unreadList[0]}
                    />
                </li>
                <li>
                    <TextNotification
                    friendPicture={avatarAngela} 
                    friendName={"Angela Gray"} 
                    notiDescription={" followed you"} 
                    notiEvent={""} 
                    notiDate={"5m ago"}
                    isRead={unreadList[1]}
                    />
                </li>
                <li>
                    <TextNotification
                    friendPicture={avatarJacob} 
                    friendName={"Jacob Thompson"} 
                    notiDescription={" has joined your group "} 
                    notiEvent={"Chess Club"} 
                    notiDate={"1 day ago"}
                    notiType={"group"}
                    isRead={unreadList[2]}
                    />
                </li>
                <li>
                    <MessageNotification 
                    friendPicture={avatarRizky} 
                    friendName={"Rizky Hasanuddin"} 
                    notiDescription={" sent you a private message"} 
                    notiEvent={""} 
                    notiDate={"5 days ago"}
                    message={"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."}
                    isRead={unreadList[3]}
                    />
                </li>
                <li>
                    <PictureNotification
                    friendPicture={avatarKimberly} 
                    friendName={"Kimberly Smith"} 
                    notiDescription={" commented on your picture"} 
                    notiEvent={""} 
                    notiDate={"1 week ago"}
                    notiPicture={chessIcon}
                    isRead={unreadList[4]} 
                    />
                </li>
                <li>
                    <TextNotification 
                    friendPicture={avatarNathan} 
                    friendName={"Nathan Peterson"} 
                    notiDescription={" reacted to your recent post"} 
                    notiEvent={" 5 end-game strategies to increase your win rate"} 
                    notiDate={"2 weeks ago"}
                    isRead={unreadList[5]}
                    idNum={"noti6"}
                    />
                </li>
                <li>
                    <TextNotification 
                    friendPicture={avatarAnna} 
                    friendName={"Anna Kim"} 
                    notiDescription={" left the group"} 
                    notiEvent={" Chess Club"} 
                    notiDate={"2 weeks ago"}
                    notiType={"group"}
                    isRead={unreadList[6]}
                    />
                </li>
            </ul>
        </section>
    )
}

export default Notifications;