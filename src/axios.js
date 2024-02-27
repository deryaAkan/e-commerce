const axios = require("axios");

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

module.exports = instance;
/*     axios
      .post("/signup", {
        fullName,
        email,
        password,
        role,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };*/
