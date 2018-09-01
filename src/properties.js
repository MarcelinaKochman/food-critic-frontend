export const localProperties = {
    hostname: "food-critic-api.herokuapp.com",
    port: ""
};

export const endpoints = {
    home: "/",
    dish: "/dish",
    register: "/user/register",
    login: "/user/login",
    restaurant: "/restaurant"
};

export const endpointsBackend = {
    home: "/",
    register: "/user",
    dish: "/dish",
    user: "/user",
    restaurant: "/restaurant",
    dishRate: "/rate/dish",
    addOpinion: "/opinion",
    restaurantRate: "/rate/restaurant",
    opinionsForDish: "/opinion/dish"
};

export const messages = {
    notValidPassword: "Haslo musi zawierac przynajmniej jedna cyfre!",
    userExist: "Login zajety!",
    notAuthorized: "Bledny login lub haslo!",
    imageNotFound: "Image not available!"
};

export const images = {
    defaultRestaurantPhoto: "https://media.otstatic.com/img/default-rest-img-36de8e53babb0388be282879433c3313.png",
    defaultDishPhoto: "https://image.ibb.co/i8QFaK/dish.jpg"
};

export const colors = {
    yellow: "#ffc107"
};

