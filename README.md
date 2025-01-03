esse projeto simulou um ambiente em produção real, com frontend criado em nuxt, framework SSR baseado em Vue, o backend foi criado em typescript usando express e prisma, e o banco de dados postgreSQL.
durante o perdiodo de 26/12/2024 a 02/01/2025 o projeto esteve ativo com frontend pelo Vercel, e o backend e banco de dados pelo Render.

##frontend
- inicialize na pasta com 'npm i'
- para abrir a pagina digite 'npm run dev'
- confgure a api para localhost
- crie um arquivo '.json' com a seguinte estrutura:
```bash
    {
        [
            "mensages": {
                "id":
                "nome":
                "mensagem":
            }
        ]
    }
```
- digite '/result' na barra de endereços para ver o resultado, ou confugure as rotas com nuxt

##backend
- inicialize na pasta com 'npm i'
- inicie o servidor com 'npm start'
- configure porta e variáveus locais
