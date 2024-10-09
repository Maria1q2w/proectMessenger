import classes from "./ProfileInfo.module.css";
import React from 'react';
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (<div>
        <div className = {classes.descriptionBlock}>
            <img src = "https://avatars.mds.yandex.net/i?id=167a8a58b3116d65d22d2c15edef7ba5_l-5240048-images-thumbs&n=13"></img>
        </div>
        <div className = {classes.descriptionBlock}>
            <img src={profile.photos.large}></img>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>)
}

export default ProfileInfo;