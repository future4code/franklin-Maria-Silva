import { Request, Response } from "express";
import { send } from "process";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { ICreateRecipeInputDTO, IGetRecipeByIdInputDTO, IGetRecipeByIdOutputDTO, IRecipeMessage } from "../models/Recipe";


export class RecipeController {
    constructor(
        protected recipeBusiness: RecipeBusiness
    ) {}

    public createRecipe = async (req: Request, res: Response) => {
        try {
            const input: ICreateRecipeInputDTO = {
                token: req.headers.authorization,
                title: req.body.title,
                description: req.body.description
            }

           const response: IRecipeMessage = await this.recipeBusiness.createRecipe(input)

            res.status(201).send(response)
        } catch(error: unknown) {
            console.log(error)
            if (error instanceof Error) {
                return res.status(400).send({message: error.message})
            } 
            res.status(500).send({message: "Erro inesperado"})
        }
    }

    public getRecipeById = async (req: Request, res: Response) => {
        try {
            const input: IGetRecipeByIdInputDTO = {
                token: req.headers.authorization as string,
                id: req.params.id
            }

            const response: IGetRecipeByIdOutputDTO = await this.recipeBusiness.getRecipe(input)
            
            res.status(200).send(response)
        } catch(error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({message: error.message})
            } 
            res.status(500).send({message: "Erro inesperado"})

        }
    }
}