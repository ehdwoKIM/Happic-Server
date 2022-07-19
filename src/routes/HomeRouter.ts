import { Router } from 'express';
import { UserController } from '../controllers';
//import { body } from 'express-validator';
import auth from '../middleware/auth';

const router: Router = Router();

router.get('/', auth, UserController.findUserById);

export default router;
