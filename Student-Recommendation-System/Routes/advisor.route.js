import { Router } from 'express';

const callback = require('../Controllers/advisor.controller');

const router = Router();
router.get('/start/:id', callback.getAdiveForSemStart);
router.get('/mid/:user/:id/:grade', callback.getAdiveForMidSem);
module.exports = router;