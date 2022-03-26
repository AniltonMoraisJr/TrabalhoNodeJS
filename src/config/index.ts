import { config } from 'dotenv';

const createEnvVars = () => {
    config();
    return {
        port: Number(process.env.PORT || 3000),
        mysql: {
            host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DATABASE,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD
        }
    }
}

export default createEnvVars();