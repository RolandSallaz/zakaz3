import { Router } from "express";
import { addUser, deleteUser, getUsers, login, updateUser } from "../controllers/users";
import auth from "../middlewares/auth";

const router = Router();

router.post("/login", login);

router.use(auth);

router.post('/users', addUser);
router.get('/users', getUsers);
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

export default router;
