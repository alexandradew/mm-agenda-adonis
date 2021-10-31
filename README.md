# MM Agenda Back End

Uma api rest para servir dados de contatos, reuniões e usuários.

# Tecnologias utilizadas

- Adonis JS como servidor
- Sqlite3 como banco de dados
- Beekeeper para visualização e testes no banco de dados
- Insomnia para testes de requisições http

## Configurações necessárias

Utilize o .env.example para gerar o .env para o seu ambiente.

## Dependências

Instale as dependências do projeto

```js
npm install
```

## Migrations

Rode as migrations para gerar as tabelas no banco de dados

```js
adonis migration:run
```

## Seeding

Rode o seed para popular as tabelas com dados iniciais

```js
adonis seed
```

## Rodando o projeto

```js
adonis serve
```

## API Endpoints

### Contacts

| Método | Url               | Responsabilidade         | Dados (R = Required) / (U = Unique)                                   | Requer autenticação |
| ------ | ----------------- | ------------------------ | --------------------------------------------------------------------- | ------------------- |
| GET    | /contact          | Mostra todos os contatos | nenhum                                                                | sim                 |
| POST   | /contact          | Registra um novo contato | (name / String /R ), (email / String /R U), (cellphone / String /R U) | sim                 |
| GET    | /contact/show/:id | Mostra um único contato  | nenhum                                                                | sim                 |
| PATCH  | /contact/:id      | Atualiza um contato      | (name / String), (email / String), (cellphone / String)               | sim                 |
| DELETE | /contact/:id      | Deleta um contato        | nenhum                                                                | sim                 |

### Meetings

| Método | Url                | Responsabilidade          | Dados (R = Required) / (U = Unique)                                                       | Requer autenticação |
| ------ | ------------------ | ------------------------- | ----------------------------------------------------------------------------------------- | ------------------- |
| GET    | /meetings          | Mostra todas os reuniões  | nenhum                                                                                    | sim                 |
| POST   | /meetings          | Registra uma nova reunião | (name / String /R), (start_time / String /R), (finish_time / String /R), (date / date /R) | sim                 |
| GET    | /meetings/show/:id | Mostra uma única reunião  | nenhum                                                                                    | sim                 |
| PATCH  | /meetings/:id      | Atualiza uma reunião      | (name / String), (email / String), (cellphone / String), (date / date)                    | sim                 |
| DELETE | /meetings/:id      | Deleta uma reunião        | nenhum                                                                                    | sim                 |

### Auth

| Método | Url          | Responsabilidade                          | Dados (R = Required) / (U = Unique)            | Requer autenticação |
| ------ | ------------ | ----------------------------------------- | ---------------------------------------------- | ------------------- |
| POST   | /auth/login  | Retorna o token JWT e os dados do usuário | (email / String /R U), (password / String /R ) | não                 |
| POST   | /auth/logout | Revoga o token usado na requisição        | nenhum                                         | sim                 |
