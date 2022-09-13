import { BaseDataBase } from "../BaseDataBase"

class Migrations extends BaseDataBase {
    public execute = async () => {
        try {
            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDataBase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    public createTables = async () => {
        await BaseDataBase.connection.raw(`
        DROP TABLE IF EXISTS Arq_Users;
        
        CREATE TABLE IF NOT EXISTS Arq_Users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        `)
    }
}

const migrations = new Migrations()
migrations.execute()