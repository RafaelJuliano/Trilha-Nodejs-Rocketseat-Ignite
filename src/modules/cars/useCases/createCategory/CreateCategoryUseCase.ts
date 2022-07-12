import { CategoryRepository } from '../../repositories/implementations/CategoryRepository'

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryUseCase {

  constructor(private categoryRepository: CategoryRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const categoyAlreadyExists = await this.categoryRepository.findByName(name)
    if (categoyAlreadyExists)
      throw new Error("Category already exists")

    await this.categoryRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }