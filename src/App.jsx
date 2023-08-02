import Profile from "./component/Profile"
import avatarImg from "./component/Profile/profileimage.jpg"

function App() {
  return (
    <>
      <Profile 
      avatar={avatarImg}
      name="Clark Kent"
      bio="Superman e repórter do planeta diário"
      email="email@email.com"
      phone="99 99999-9999"
      githubUrl="https://github.com/"
      linkedinUrl="https://linkedin.com/"
      twitterUrl="https://twitter.com/"
      />
    </>
  )
}

export default App


