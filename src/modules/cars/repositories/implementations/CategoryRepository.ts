import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository'

export class CategoryRepository implements ICategoryRepository {

  private repository: Repository<Category>
  private static INSTANCE: CategoryRepository

  private constructor() {
    this.repository = getRepository(Category)
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository
    }
    return CategoryRepository.INSTANCE
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {

    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    return await this.repository.find()
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({ name })
  }
}