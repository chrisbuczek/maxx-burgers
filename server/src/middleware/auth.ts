import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  let token;
  //implement jwt here...
  jwt.verify(token, "shhhhh", function (err, decoded) {
    console.log(decoded.foo); // bar
  });
};

export default auth;
