import { CategoryRepository } from '../../repositories/implementations/CategoryRepository'

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryUseCase {

  constructor(private categoryRepository: CategoryRepository) { }

  execute({ name, description }: IRequest): void {
    if (this.categoryRepository.findByName(name))
      throw new Error("Category already exists")

    this.categoryRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }