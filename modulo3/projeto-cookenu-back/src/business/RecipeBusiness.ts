import { RecipeDatabase } from "../database/RecipeDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { ICreateRecipeInputDTO, IGetRecipeByIdInputDTO, IGetRecipeByIdOutputDTO, IRecipeMessage, Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class RecipeBusiness {
    constructor(
        protected recipeDatabase: RecipeDatabase,
        protected idGenerator: IdGenerator,
        protected authenticator: Authenticator
    ) {}

    public createRecipe = async (input: ICreateRecipeInputDTO) => {
        const token = input.token
        const title = input.title
        const description = input.description

        if (!token || !title || !description) {
            throw new Error("Parâmetros não informados!")
        }

        const id = this.idGenerator.generate();
        const creationDate = new Date();

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando!")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findById(payload.id)

        const recipe = new Recipe(id, title, description, creationDate, user.id, user.name)

        await this.recipeDatabase.createRecipe(recipe)
        
        const response: IRecipeMessage = {
           message: "Receita criada!"
        }

        return response
    }

    public getRecipe = async (input: IGetRecipeByIdInputDTO) => {
        const token = input.token
        const id = input.id

        if (!token) {
            throw new Error("Token não informados!")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando!")
        }

        const recipe = await this.recipeDatabase.findById(id)

        if(!recipe) {
            throw new Error("Receita não encontrada!")
        }

        const response: IGetRecipeByIdOutputDTO = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            creationDate: recipe.creationDate
         }
 
         return response

    }

    
}