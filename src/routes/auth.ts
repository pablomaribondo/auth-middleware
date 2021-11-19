import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

export const auth = (request: Request, response: Response) => {
  const { user } = request.body;

  const token = sign(
    {
      user
    },
    process.env.JWT_SALT,
    {
      expiresIn: 120
    }
  );

  response.json({ token });
};
