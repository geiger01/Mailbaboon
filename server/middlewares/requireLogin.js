module.exports = (req, res, next) => {
  if (!req.user) {
    return res.send(401);
  }
  next();
};
