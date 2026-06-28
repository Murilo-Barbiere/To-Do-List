export class UserEntity{
    constructor(
        public id: number | null,
        public name: string,
        public email: string,
        public senha: string
    ){}
}