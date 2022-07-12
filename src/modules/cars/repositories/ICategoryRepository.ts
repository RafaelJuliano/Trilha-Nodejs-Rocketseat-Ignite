import { Category } from "../entities/Category"

interface ICreateCategoryDTO {
  name: string,
  description: string
}

interface ICategoryRepository {
  findByName(name: string): Promise<Category>,
  create({ }: ICreateCategoryDTO): Promise<void>,
  list(): Promise<Category[]>
}

export { ICreateCategoryDTO, ICategoryRepository }