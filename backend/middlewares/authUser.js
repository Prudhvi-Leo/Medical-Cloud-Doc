import jwt from 'jsonwebtoken'

export const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!req.body) req.body = {};

        req.body.userId = decoded.id;
    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized access" });
  }
};


export default authUser