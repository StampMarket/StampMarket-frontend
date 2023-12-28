// define the api url
const userURL = "http://localhost:8222/user";
const stampURL = "http://localhost:8222/stamp";
const orderURL = "http://localhost:8222/order";

// define the api
const api = {
    // user
    login: userURL + "/login",
    register: userURL + "/register",
    recharge: userURL + "/recharge",
    deduct: userURL + "/deduct",
    // stamp
    getStampList: stampURL + "/list",
    addStamp: stampURL + "/add",
    deleteStamp: stampURL + "/delete",
    updateStamp: stampURL + "/modify",
    checkPrice: stampURL + "/price",
    // order
    createOrder: orderURL,
};

export default api;