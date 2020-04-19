import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b2268c53-b464-4f14-99e6-708f4d478308"
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            });
    }
};

export const getUsers = (currentPage = 1, pageSize = 15) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        }
    )
};


