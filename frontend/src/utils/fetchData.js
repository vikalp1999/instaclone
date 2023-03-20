import axios from 'axios'

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`https://instaclone-j21j.onrender.com/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`https://instaclone-j21j.onrender.com/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`https://instaclone-j21j.onrender.com/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`https://instaclone-j21j.onrender.com/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`https://instaclone-j21j.onrender.com/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}