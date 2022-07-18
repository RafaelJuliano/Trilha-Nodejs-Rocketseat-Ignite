import { inject, injectable } from "tsyringe";
import { IUserRepository, ICreateUserDTO } from "../../repositories/IUserRepository";


@injectable()
export class CreateUserUseCase {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({
            name,
            email,
            driver_license,
            password
        })
    }
}