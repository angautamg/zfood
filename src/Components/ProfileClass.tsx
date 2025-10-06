import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../../public/Common/constants";

interface UserInfo {
  followers: number;
  html_url: string;
  name: string;
  avatar_url: string;
  bio: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
}

interface ProfileState {
  userInfo: UserInfo | null;
  repoInfo: Repo[] | null;
}

class Profile extends Component<{}, ProfileState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInfo: null,
      repoInfo: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch(Github_API_User + Github_UserName, options),
        fetch(Github_API_User + Github_UserName + "/repos", options),
      ]);

      const resData = await Promise.all(response.map((r) => r.json()));

      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1],
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { userInfo, repoInfo } = this.state;

    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Food<span>Fire</span> App Github Repository
              </h1>
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
