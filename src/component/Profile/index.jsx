import Button from "../Button";

export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
  return (
    <>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p>{bio}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <Button url={githubUrl} text="Github"/>
      <Button url={linkedinUrl} text="LinkedIn"/>
      <Button url={twitterUrl} text="Twitter"/>
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