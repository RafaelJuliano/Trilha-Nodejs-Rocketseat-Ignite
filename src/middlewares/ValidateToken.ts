import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from '../modules/users/repositories/implementations/UserRepository'

interface IDecode {
    sub: string
}


export async function validateToken(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers

    if (!authorization) {
        throw new Error("token is missing");
    }

    const [, token] = authorization.split(' ')
    try {
        const { sub: user_id } = verify(token, 'tempjwttoken') as IDecode

        const userRepository = new UserRepository()
        const user = userRepository.findById(user_id)

        if (!user) {
            throw new Error("user do not exist");
        }

        next()
    } catch (error) {
        throw new Error("invalid token");
    }

}