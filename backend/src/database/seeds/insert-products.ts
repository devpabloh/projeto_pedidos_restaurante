import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 45, description: "Delicioso nhoque com molho quatro queijos" },
        { name: "Isca de frango", price: 60, description: "Iscas de frango empanadas e crocantes" },
        { name: "Tilápia com alcaparras", price: 100, description: "Filé de tilápia grelhado com molho de alcaparras" },
        { name: "Escondidinho de carne", price: 75, description: "Escondidinho de carne seca com purê de mandioca" },
        { name: "Porção de batatas fritas", price: 65, description: "Batatas fritas crocantes com tempero especial" },
        { name: "Executivo de frango grelhado", price: 40, description: "Prato executivo com frango grelhado, arroz e salada" },
        { name: "Executivo de tilápia grelhada", price: 39, description: "Prato executivo com tilápia grelhada, arroz e legumes" },
        { name: "Caldo de palmito", price: 30, description: "Caldo cremoso de palmito com croutons" },
        { name: "Refrigerante 350ml", price: 7.5, description: "Refrigerante em lata, diversas opções" },
        { name: "Suco de laranja 440ml", price: 10, description: "Suco de laranja natural" },
    ]);
};
