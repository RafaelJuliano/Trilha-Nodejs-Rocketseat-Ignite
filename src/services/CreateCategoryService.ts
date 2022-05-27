import { CreateCategoryRepository } from '../repositories/CreateCategoryRepository'

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryService {

  constructor(private createCategoryRepository: CreateCategoryRepository) { }

  execute({ name, description }: IRequest): void {
    if (this.createCategoryRepository.findByName(name))
      throw new Error("Category already exists")

    this.createCategoryRepository.create({ name, description })
  }
}

export { CreateCategoryService }