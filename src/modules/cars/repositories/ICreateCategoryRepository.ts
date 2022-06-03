import { Category } from "../model/Category"

interface ICreateCategoryDTO {
  name: string,
  description: string
}

interface ICreateCategoryRepository {
  findByName(name: string): Category,
  create({ }: ICreateCategoryDTO): void,
  list(): Category[]
}

export { ICreateCategoryDTO, ICreateCategoryRepository }