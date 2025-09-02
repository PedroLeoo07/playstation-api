<div align="center">
  <h1>🎮 PlayStation API</h1>
  <p>Uma API moderna e robusta para integração com a PlayStation Store</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
  ![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
</div>

---

## 📋 Sobre o Projeto

Esta API foi desenvolvida para fornecer uma interface moderna e eficiente para interagir com dados da PlayStation Store. Construída com Next.js e JavaScript, oferece endpoints RESTful para consulta de jogos, gerenciamento de usuários e processamento de compras.

### ✨ Principais Funcionalidades

- 🎯 Consulta de jogos da PlayStation Store
- 📱 API responsiva e escalável

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/playstation-api.git
cd playstation-api
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
   
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📂 Estrutura do Projeto

```
playstation-api/
├── app/                    # App Router do Next.js
│   ├── api/               # Endpoints da API
│   │   └── playstation/   # Rotas específicas da PlayStation
│   ├── components/        # Componentes reutilizáveis
│   └── globals.css        # Estilos globais
├── lib/                   # Utilitários e configurações
├── public/                # Arquivos estáticos
├── docs/                  # Documentação adicional
└── tests/                 # Testes automatizados
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 14+ | Framework React full-stack |
| **JavaScript** | ES6+ | Linguagem de programação moderna |
| **Node.js** | 18+ | Runtime JavaScript |
| **Tailwind CSS** | 3+ | Framework CSS utilitário |

---

## 📖 Documentação da API

### Base URL
```
https://localhost:3000/api
```

### Autenticação
Todas as rotas protegidas requerem um token JWT no header:
```
Authorization: Bearer <seu-token>
```

### Endpoints Disponíveis

#### 🎮 **Jogos**

##### `GET /api/playstation/games`
Retorna a lista de jogos disponíveis.

**Query Parameters:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10)
- `genre` (opcional): Filtrar por gênero
- `platform` (opcional): Filtrar por plataforma

**Resposta:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "The Last of Us Part II",
      "genre": "Action-adventure",
      "platform": "PS5",
      "price": 59.99,
      "releaseDate": "2020-06-19",
      "rating": 4.8,
      "imageUrl": "https://example.com/image.jpg"
    }
  ],
  "pagination": {
    "current": 1,
    "total": 150,
    "pages": 15
  }
}
```

##### `GET /api/playstation/games/:id`
Retorna detalhes de um jogo específico.

##### `POST /api/playstation/games`
Adiciona um novo jogo (requer autenticação admin).

#### 💳 **Compras**

##### `POST /api/playstation/purchase`
Processa a compra de um jogo.

**Body:**
```json
{
  "gameId": 1,
  "userId": 123,
  "paymentMethod": "credit_card"
}
```

**Resposta:**
```json
{
  "success": true,
  "transactionId": "txn_123456789",
  "message": "Compra realizada com sucesso!",
  "receipt": {
    "gameTitle": "The Last of Us Part II",
    "amount": 59.99,
    "purchaseDate": "2024-01-15T10:30:00Z"
  }
}
```

#### 👤 **Usuários**

##### `POST /api/auth/register`
Registra um novo usuário.

##### `POST /api/auth/login`
Autentica um usuário.

##### `GET /api/users/profile`
Retorna o perfil do usuário autenticado.

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linting

# Banco de dados
npm run db:migrate   # Executa migrações
npm run db:seed      # Popula banco com dados iniciais
npm run db:studio    # Abre Prisma Studio

# Testes
npm run test         # Executa testes
npm run test:watch   # Executa testes em modo watch
npm run test:coverage # Gera relatório de cobertura
```

---

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Docker
```bash
# Build da imagem
docker build -t playstation-api .

# Executar container
docker run -p 3000:3000 playstation-api
```

---

## 🧪 Testes

Execute os testes com:
```bash
npm run test
```

Para testes com cobertura:
```bash
npm run test:coverage
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use JavaScript ES6+ para todos os arquivos
- Siga as convenções do ESLint
- Mantenha cobertura de testes acima de 80%
- Documente APIs com JSDoc

---

## ❓ Troubleshooting

### Problemas Comuns

**Erro de conexão com banco de dados**
```bash
# Verifique se o PostgreSQL está rodando
sudo service postgresql status

# Verifique as variáveis de ambiente
cat .env.local
```

**Porta 3000 ocupada**
```bash
# Use uma porta diferente
PORT=3001 npm run dev
```

**Problemas com dependências**
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Recursos Úteis

- [📖 Documentação do Next.js](https://nextjs.org/docs)
- [🎓 Tutorial Interativo](https://nextjs.org/learn)
- [🔧 Prisma Docs](https://www.prisma.io/docs)
- [🎨 Tailwind CSS](https://tailwindcss.com/docs)
- [📊 Postman Collection](./docs/postman-collection.json)
- [📝 MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📈 Roadmap

- [ ] Integração com PlayStation Network

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👥 Equipe

- **Desenvolvedor Principal** - [Leonardo Oliveira](https://github.com/PedroLeoo07)

---

<div align="center">
  <p>Feito com ❤️ para a comunidade PlayStation</p>
  
  [![GitHub stars](https://img.shields.io/github/stars/seu-usuario/playstation-api?style=social)](https://github.com/seu-usuario/playstation-api)
  [![GitHub forks](https://img.shields.io/github/forks/seu-usuario/playstation-api?style=social)](https://github.com/seu-usuario/playstation-api)
</div>
