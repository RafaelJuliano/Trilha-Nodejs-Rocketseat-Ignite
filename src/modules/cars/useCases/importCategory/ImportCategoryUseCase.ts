import fs from 'fs'
import { Parser } from 'csv-parse'
import { CategoryRepository } from '../../repositories/implementations/CategoryRepository'

interface IImportCategory {
    name: string
    description: string
}

export class ImportCategoryUseCase {

    constructor(private categoryRepository: CategoryRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = []
            const stream = fs.createReadStream(file.path)

            const parseFile = new Parser({
                delimiter: ',',
            })

            stream.pipe(parseFile)

            parseFile.on("data", async line => {
                const [name, description] = line
                categories.push({
                    name,
                    description
                })
            })
                .on("end", () => {
                    resolve(categories)
                })
                .on("error", (err) => {
                    reject(err)
                })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)

        categories.map(async category => {
            const { name, description } = category

            const categoryExists = await this.categoryRepository.findByName(name)

            if (!categoryExists) {
                await this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }
}