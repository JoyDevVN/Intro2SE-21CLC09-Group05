import axiosInstance from "../config";

export default async function login(username, password) {
    console.log(`Login username: ${username} - password: ${password}`);

    // await axiosInstance.post("/auth/login", {
    //     username: username,
    //     password: password,
    // }).then((res) => {
    //     console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
    //     return {role: res.data.role};
    // }).catch((err) => {
    //     if (err.response) {
    //         console.log(err.response.data.message);
    //         return {error: err.response.data.message};
    //     }
    // });
    try {
        const res = await axiosInstance.post("/auth/login", {
            username: username,
            password: password,
        });
        console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        return {role: res.data.role};
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return {error: err.response.data.message};
        }
    }
}