//router index file
import { Router } from 'express';
import DailyRouter from './DailyRouter';
import FileRouter from './FileRouter';
import HomeRouter from './HomeRouter';
import MypageRouter from './MypageRouter';
import AuthRouter from './AuthRouter';
import CharRouter from './CharRouter';

const router = Router();

router.use('/file', FileRouter);
router.use('/home', HomeRouter);
router.use('/mypage', MypageRouter);
router.use('/daily', DailyRouter);
router.use('/auth', AuthRouter);
router.use('/character', CharRouter);

export default router;
