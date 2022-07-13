import { getRepository, Repository } from 'typeorm'
import { IUserRepository, ICreateUserDTO } from '../IUserRepository'
import { User } from '../../entities/User'

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name, username, email, driver_license, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password
        })

        await this.repository.save(user)
    }
}
