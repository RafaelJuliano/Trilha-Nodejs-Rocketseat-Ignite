import { CategoryRepository } from "../../repositories/CategoryRepository";

export class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) { }

    execute() {
        return this.categoryRepository.list()
    }
}