import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ISignupInputDTO, ISignupOutputDTO } from "../models/User";

export class UserController {
    constructor(
        protected userBusiness: UserBusiness
    ) {}
    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

           const response: ISignupOutputDTO = await this.userBusiness.signup(input)

            res.status(201).send(response)
        } catch(error) {
            console.log(error)
            if (error instanceof Error) {
                return res.status(400).send({message: error.message})
            } 
            res.status(500).send({message: "Erro inesperado"})
        }
    }
}