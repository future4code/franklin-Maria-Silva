export interface IRecipeDB {
    id: string,
    title: string,
    description: string,
    creationDate: Date,
    userId: string,
    userName: string
}

export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: Date,
        private userId: string,
        private userName: string
    ) {}

    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }
    public getCreationDate = () => {
        return this.creationDate
    }

    public getUserId = () => {
        return this.userId
    }

    public getUserName = () => {
        return this.userName
    }

    public setTitle = (newTitle: string) => {
        this.id = newTitle
    }

    public setDescription = (newDescription: string) => {
        this.id = newDescription
    }
}

export interface ICreateRecipeInputDTO {
    token: string | undefined,
    title: string,
    description: string
}

export interface IRecipeMessage {
    message: string
}