import express from 'express';

import { getUserByEmail, createUser, updateUser } from '../db/user';
import { authentication, random } from '../utils/auth';

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.salt, password);

    if (user.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.sessionToken = authentication(salt, user.id.toString());

    await updateUser(user.id, user);

    res.cookie('AUTH', user.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      salt,
      password: authentication(salt, password)
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
