import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto }  className={classes.mainPhoto}/>
                { isOwner && <div><input type={"file"} onChange={onMainPhotoSelected} /></div> }
                <div>
                    {profile.aboutMe}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
};

export default ProfileInfo