import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import UserMap from '../mappers/index';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });

    const mappedUser = UserMap.toDTO(user);

    return response.json(mappedUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;