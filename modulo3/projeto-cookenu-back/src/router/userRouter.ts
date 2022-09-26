import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { RecipeController } from "../controller/RecipeController";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeDatabase } from "../database/RecipeDatabase";

export const userRouter = Router();

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new Authenticator(),
        new IdGenerator(),
        new HashManager()
    )
);

const recipeController = new RecipeController(
    new RecipeBusiness(
        new RecipeDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
);

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/profile", userController.getOwnProfile)
userRouter.get("/:id", userController.getProfileById)
userRouter.post("/recipe", recipeController.createRecipe)
userRouter.get("/recipe/:id", recipeController.getRecipeById)