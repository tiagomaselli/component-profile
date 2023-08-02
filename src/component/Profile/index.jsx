import Link from "../Link";

export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
  return (
    <>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p>{bio}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <Link url={githubUrl} text="Github"/>
      <Link url={linkedinUrl} text="LinkedIn"/>
      <Link url={twitterUrl} text="Twitter"/>
    </>
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