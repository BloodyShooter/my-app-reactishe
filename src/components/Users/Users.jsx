import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import * as axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respounse => {
                this.props.setUsers(respounse.data.items);
            });
        }
    };

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img alt='photo' src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id);
                            }}>Unfllow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id);
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users