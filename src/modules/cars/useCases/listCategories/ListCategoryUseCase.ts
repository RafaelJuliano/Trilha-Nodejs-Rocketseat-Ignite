import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { inject, injectable } from 'tsyringe'
@injectable()
export class ListCategoryUseCase {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: CategoryRepository) { }

    async execute() {
        return await this.categoryRepository.list()
    }
}