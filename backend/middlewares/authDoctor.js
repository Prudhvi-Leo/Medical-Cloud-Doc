import jwt from 'jsonwebtoken'

export const authDoctor = (req, res, next) => {
  try {
    const { dtoken } = req.headers;

    if (!dtoken) {
      return res.json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

        if (!req.body) req.body = {};
        req.body.docId = decoded.id;

    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized access" });
  }
};


export default authDoctor