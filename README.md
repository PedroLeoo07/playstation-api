#  API Playstation 🎮

Bem-vindo ao projeto da API! Este projeto foi criado com [Next.js](https://nextjs.org) e está pronto para ser usado e expandido.

---

## 🚀 Começando

Siga os passos abaixo para rodar o servidor de desenvolvimento:

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o resultado.

---

## 📂 Estrutura do Projeto

- **`app/`**: Contém as páginas e componentes principais.
- **`public/`**: Arquivos estáticos como imagens e ícones.
- **`styles/`**: Arquivos de estilo global e específicos.
- **`api/`**: Endpoints da API.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Vercel**: Plataforma de deploy para aplicações web.

---

## 📖 Documentação da API

### **GET /api/example**

Retorna um exemplo de resposta.

#### Exemplo de Resposta:
```json
{
  "message": "Hello, World!"
}
```

### **POST /api/example**

Envia dados para o servidor.

#### Corpo da Requisição:
```json
{
  "name": "Seu Nome"
}
```

#### Exemplo de Resposta:
```json
{
  "success": true,
  "data": {
    "name": "Seu Nome"
  }
}
```

### **GET /api/playstation/games**

Retorna uma lista de jogos disponíveis na PlayStation Store.

#### Exemplo de Resposta:
```json
[
  {
    "id": 1,
    "title": "The Last of Us Part II",
    "genre": "Action-adventure",
    "price": 59.99
  },
  {
    "id": 2,
    "title": "God of War Ragnarök",
    "genre": "Action",
    "price": 69.99
  }
]
```

### **POST /api/playstation/purchase**

Realiza a compra de um jogo.

#### Corpo da Requisição:
```json
{
  "gameId": 1,
  "userId": 123
}
```

#### Exemplo de Resposta:
```json
{
  "success": true,
  "message": "Compra realizada com sucesso!"
}
```

---

## 🌐 Deploy

O deploy mais fácil para este projeto é usando a plataforma [Vercel](https://vercel.com). Confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

## 📚 Recursos Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Tutorial Interativo do Next.js](https://nextjs.org/learn)
- [Repositório no GitHub](https://github.com/vercel/next.js)

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usá-lo e modificá-lo.

---
