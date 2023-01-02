import style from "./UserList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlus } from "@fortawesome/free-solid-svg-icons";

function UsersListItem(props) {
  const {
    user: {
      id,
      gender,
      firstName,
      lastName,
      imgsrc,
      twitters,
      following,
      followers,
    },
  } = props;

  const inLineStyle = {
    color: gender === "Male" ? "wheat" : "white",
  };

  return (
    <div className={style.userCard}>
      <div className={style.userCardHeader}>
        <div className={style.photoContainer}>
          <img src={imgsrc} className={style.userPhoto} alt="#" />
          <h1 style={inLineStyle} className={style.firstName}>
            {firstName}
          </h1>
          <h2 className={style.lastName}>{lastName}</h2>
          <div className={style.circleBehindStar}>
            <FontAwesomeIcon icon={faPlus} className={style.faPlus} />
          </div>
          <div className={style.countContainer}>
            <div>
              Tweets
              <div className={style.count}>{twitters}</div>
            </div>
            <div>
              Following
              <div className={style.count}>{following}</div>
            </div>
            <div>
              Followers
              <div className={style.count}>{followers}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
