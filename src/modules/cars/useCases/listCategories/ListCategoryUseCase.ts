import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) { }

    execute() {
        return this.categoryRepository.list()
    }
}