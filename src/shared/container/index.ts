import { container } from 'tsyringe'
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoryRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'
import { UserRepository } from '../../modules/users/repositories/implementations/UserRepository'
import { IUserRepository } from '../../modules/users/repositories/IUserRepository'

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository
)

container.registerSingleton<ISpecificationsRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
)

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository
)