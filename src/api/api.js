import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0bc8464a-0026-472a-a6a7-5d865c43699a"
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
};

export const getUsers = (currentPage = 1, pageSize = 15) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        }
    )
};


