import jwt from 'jsonwebtoken'

export const authAdmin = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.json({ success: false, message: "No token provided" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return res.json({ success: false, message: "Unauthorized access" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.authId !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Unauthorized access" });
    }
    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized access" });
  }
};


export default authAdmin