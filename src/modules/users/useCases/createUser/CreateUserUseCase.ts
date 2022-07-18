import { inject, injectable } from "tsyringe";
import { IUserRepository, ICreateUserDTO } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {

        const emailAlreadyExists = await this.userRepository.findByEmail(email)

        if (emailAlreadyExists) {
            throw new Error("Email already exists");
        }

        const hashedPassword = await hash(password, 8)

        await this.userRepository.create({
            name,
            email,
            driver_license,
            password: hashedPassword
        })
    }
}