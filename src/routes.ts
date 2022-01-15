import { Router } from 'express';

import { IsAuthenticated } from './middleware/isAuthenticated';
import { auth } from './routes/auth';
import { secret } from './routes/secret';

export const router = Router();

router.post('/auth', auth);
router.get('/secret', IsAuthenticated, secret);
