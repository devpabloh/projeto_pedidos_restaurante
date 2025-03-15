import { knex as knexConfig} from "knex";
import config from "../../knexfile";

export const knex = knexConfig(config) // A variável knex está recebendo a função knex do knexConfig com o parâmetro config. 