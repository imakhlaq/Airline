import { Router } from 'express';
import v1Routes from '@/routes/v1/v1-routes';
import v2Routes from '@/routes/v2/v2-routes';

/**
 * Keep All the routes here.
 * You can also create different files for different types of controllers
 */

const router = Router();

//routes gonna be => /api/v1/.....
router.get('/v1', v1Routes);
router.get('/v2', v2Routes);

export default router;
