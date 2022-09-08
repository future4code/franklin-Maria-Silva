import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function editUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body
      const token = req.headers.authorization
      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }
      if(!token){
         throw new Error()
      }
      const authenticator = new Authenticator()
      const data = authenticator.getData(token)
      
      const affectRows = await new UserDatabase().edit(data.id ,  {name, nickname})

      if(affectRows == 0){
         throw new Error("Usuario não atualizado")
      }

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}