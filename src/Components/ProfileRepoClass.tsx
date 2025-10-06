import { Component } from "react";
import {
  Github_Repository_Name,
} from "../../public/Common/constants";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

interface UserInfo {
  followers: number;
  html_url: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
}

interface ProfileRepoClassProps {
  userInfo: UserInfo;
  repoInfo: Repo[];
}

class ProfileRepoClass extends Component<ProfileRepoClassProps> {
  render() {
    const {
      userInfo: { followers, html_url },
      repoInfo: repoList,
    } = this.props;

    return (
      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === Github_Repository_Name)
          .map((repo) => (
            <div key={repo.id} className="profile-repo">
              <h1>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h1>
              <h3 className="repo-des">{repo.description}</h3>
              <div className="profile-repo-items">
                <h3>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    <FiUsers />
                    <span>{followers} Followers</span>
                  </a>
                </h3>
                <h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiGitRepoForked />
                    <span>{repo.forks_count} Forks</span>
                  </a>
                </h3>
                <h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiStar />
                    <span>{repo.stargazers_count} Stars</span>
                  </a>
                </h3>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default ProfileRepoClass;
