import jwt from 'jsonwebtoken';

// Authentication middleware to verify the token
export const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Get the token from the header
  
  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the JWT_SECRET
    req.user = decoded; // Store the decoded user information (user-id) in the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    return res.status(400).json({ message: "Invalid token." });
  }
};
