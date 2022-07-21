import { getRepository, Repository } from 'typeorm'
import { IUserRepository, ICreateUserDTO } from '../IUserRepository'
import { User } from '../../entities/User'

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password
        })

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email })
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id)
    }
}
