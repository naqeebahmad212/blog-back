const jwt = require(`jsonwebtoken`);

const isLoggedIn = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "react", (err, info) => {
      if (err) {
        res.send({ loggedIn: false });
        next();
      } else {
        res.send({ loggedIn: true });
        next();
      }
    });
  } else {
    res.send({ loggedIn: false });
    next();
  }
};

module.exports = {
  isLoggedIn,
};
