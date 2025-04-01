
import { Router } from 'express' 
import { createContact } from '../controllers/contact.controller.js';

const router = Router();

router.route('/contact').post(createContact);

export default router; 