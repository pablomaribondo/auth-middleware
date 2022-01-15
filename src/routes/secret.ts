import { Request, Response } from 'express';

export const secret = (request: Request, response: Response) => {
  response.send(JSON.stringify(request['tokenData']));
};
