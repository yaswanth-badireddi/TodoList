import express from 'express';
import {additem,deleteitem,getitems} from '../controllers/item.controller.js';
const router = express.Router();
router.post('/additem', additem);
router.delete('/deleteitem/:id', deleteitem);
router.get('/getitems', getitems);


export default router;