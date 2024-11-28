const authMiddleware = (req, res, next) => {
    if (req.session.user) {
      next(); //user authenticated just continue
    } else {
      res.status(401).json({ message: 'Unauthorized access' });
    }
  };
  
  module.exports = authMiddleware;
  