import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export const IsAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const token = request.headers.authorization.replace('Bearer ', '');
    const validToken = verify(token, process.env.JWT_SALT);

    request['tokenData'] = validToken;

    next();
  } catch (error) {
    response.status(401).json('Unauthorized');
  }
};
