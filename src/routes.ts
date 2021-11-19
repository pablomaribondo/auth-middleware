import { Router } from 'express';
import { auth } from './routes/auth';

export const router = Router();

router.post('/auth', auth);
