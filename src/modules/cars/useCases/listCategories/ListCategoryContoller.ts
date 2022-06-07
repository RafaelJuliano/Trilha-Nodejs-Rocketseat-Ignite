import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) { }

    handle(request, response) {
        return response.json(this.listCategoryUseCase.execute())
    }
}