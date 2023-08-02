import Link from "../Link";
import styles from "./style.module.css";

export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={name} className={styles.avatar}/>
      <h2 className={styles.name}>{name}</h2>
      <div>{bio}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div className={styles.links}>
        <Link url={githubUrl} text="Github"/>
        <Link url={linkedinUrl} text="LinkedIn"/>
        <Link url={twitterUrl} text="Twitter"/>
      </div>
    </div>
  )
}

/*
props:

avatar

name
bio
email
phone

githubUrl
linkedinUrl
twitterUrl
*/