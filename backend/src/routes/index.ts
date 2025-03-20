import { Router } from "express";
import { addUser, deleteUser, getUsers, login, updateUser } from "../controllers/users";
import auth from "../middlewares/auth";
import { addCard, deleteCard, getCards, updateCard } from "../controllers/cards";
import { addSmallCard, deleteSmallCard, getAllSmallCards, updateSmallCard } from "../controllers/services";

const router = Router();

router.post("/login", login);
router.get('/cards', getCards);
router.get('/services', getAllSmallCards)
router.use(auth);

router.post('/users', addUser);
router.get('/users', getUsers);
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

router.post('/cards', addCard)
router.patch('/cards/:id', updateCard)
router.delete('/cards/:id', deleteCard)

router.post('/services', addSmallCard)
router.patch('/services/:id', updateSmallCard)
router.delete('/services/:id', deleteSmallCard)

export default router;
