import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute() {
        return await this.categoryRepository.list()
    }
}