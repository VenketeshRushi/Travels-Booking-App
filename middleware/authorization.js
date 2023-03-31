import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';


const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_ASSESS_KEY);
};

const authorization = (handler) => async (req, res) => {
  try {
    const bearerToken = req?.headers?.authorization;

    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
      return res.status(400).json({ message: 'Please provide a valid token', status: 'Failed' });
    }

    const token = bearerToken.split(" ")[1];

    let user;
    try {
      user = verifyToken(token);
    } catch (e) {
      return res.status(400).json({ message: 'Please provide a valid token', status: 'Failed' });
    }

    if (!user) {
      return res.status(400).json({ message: 'User not found', status: 'Failed' });
    }

    req.user = user.user;

    return handler(req, res);

  } catch (e) {
    return res.status(500).json({ message: e.message, status: 'Failed' });
  }
};

export default authorization;
