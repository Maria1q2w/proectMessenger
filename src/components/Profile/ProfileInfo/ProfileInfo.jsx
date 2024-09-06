import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (<div>
        <div>
            <img src = "https://get.wallhere.com/photo/cat-animals-sitting-white-background-baby-animals-whiskers-kitten-fauna-mammal-vertebrate-cat-like-mammal-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-abyssinian-somali-162939.jpg"></img>
        </div>
        <div className = {classes.descriptionBlock}>
            ava+dscr
        </div>
    </div>)
}

export default ProfileInfo;