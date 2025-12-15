import express from 'express';
import {
  createOrder,
  verifyPayment,
  getAllPayments,
  getPaymentById,
  getUserPayments,
} from '../controllers/paymentController.js';

const router = express.Router();

router.post('/create-order', createOrder);
router.post('/verify', verifyPayment);
router.get('/', getAllPayments);
router.get('/:id', getPaymentById);
router.get('/user/:userId', getUserPayments);

export default router;
