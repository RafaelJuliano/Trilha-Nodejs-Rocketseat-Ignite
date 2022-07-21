import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken'
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IResponse {
    token: string,
    user: {
        name: string,
        email: string
    }
}

interface IRequest {
    email: string,
    password: string
}


@injectable()
export class CreateSessionUseCase {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new Error("Email or password is incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email or password is incorrect");
        }

        const token = sign({}, "tempjwttoken", {
            subject: user.id,
            expiresIn: '1d'
        })

        return {
            user: {
                email: user.email,
                name: user.name
            },
            token
        }
    }
}