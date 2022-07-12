import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) { }

    async handle(request, response) {
        return response.json(await this.listCategoryUseCase.execute())
    }
}