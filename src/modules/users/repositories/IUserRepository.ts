interface ICreateUserDTO {
    name: string
    password: string
    email: string
    driver_license: string
}

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>
}

export { IUserRepository, ICreateUserDTO }