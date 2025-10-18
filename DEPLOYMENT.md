# 🚀 Guia de Deployment - Analisador de Apostas Esportivas

## Deploy em Vercel (Recomendado - Gratuito e Permanente)

### Passo 1: Criar Conta no Vercel
1. Acesse https://vercel.com
2. Clique em "Sign Up" (Cadastrar)
3. Use sua conta GitHub, GitLab ou email

### Passo 2: Fazer Upload do Projeto
**Opção A - Via GitHub (Recomendado):**
1. Faça push do projeto para GitHub
2. No Vercel, clique em "New Project"
3. Selecione o repositório
4. Clique em "Deploy"

**Opção B - Fazer Upload Direto:**
1. No Vercel, clique em "New Project"
2. Selecione "Other" ou "Import Git Repository"
3. Faça upload dos arquivos do projeto

### Passo 3: Configuração Automática
O Vercel detectará automaticamente que é um projeto Vite/React e configurará:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Passo 4: Deploy
1. Clique em "Deploy"
2. Aguarde 2-3 minutos
3. Seu site estará em um URL permanente como: `seu-projeto.vercel.app`

---

## Deploy em Netlify (Alternativa Gratuita)

### Passo 1: Criar Conta
1. Acesse https://netlify.com
2. Clique em "Sign Up"
3. Use GitHub, GitLab ou email

### Passo 2: Conectar Repositório
1. Clique em "New site from Git"
2. Selecione seu provedor (GitHub, GitLab, etc)
3. Autorize o Netlify

### Passo 3: Configurar Build
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Passo 4: Deploy
1. Clique em "Deploy site"
2. Aguarde o build completar
3. Seu site estará em um URL permanente

---

## Deploy em GitHub Pages (Gratuito)

### Passo 1: Criar Repositório
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/sports-betting-analyzer.git
git push -u origin main
```

### Passo 2: Configurar GitHub Pages
1. Vá para Settings do repositório
2. Selecione "Pages"
3. Escolha "Deploy from a branch"
4. Selecione `main` branch e `/root` folder

### Passo 3: Atualizar vite.config.js
```javascript
export default {
  base: '/sports-betting-analyzer/',
  // ... resto da config
}
```

### Passo 4: Deploy
```bash
npm run build
git add dist/
git commit -m "Build for deployment"
git push
```

---

## Verificação Pós-Deploy

Após fazer o deploy, verifique:

✅ **Homepage carrega corretamente**
- Verifique se o header e navegação aparecem

✅ **Navegação funciona**
- Clique em cada aba (Analisador, Mercado, Cassinos)

✅ **Dados aparecem**
- Verifique se as tabelas e gráficos carregam

✅ **Responsividade**
- Teste em mobile, tablet e desktop

✅ **Performance**
- Verifique o tempo de carregamento

---

## Troubleshooting

### Problema: Build falha
**Solução:** Verifique se todos os arquivos estão no lugar certo
```bash
npm install
npm run build
```

### Problema: Página em branco
**Solução:** Verifique o console do navegador (F12) para erros

### Problema: Assets não carregam
**Solução:** Verifique o `base` em vite.config.js

---

## Próximos Passos

Após o deploy permanente:

1. **Adicionar domínio personalizado** (opcional)
   - Vercel e Netlify permitem conectar domínios próprios

2. **Configurar SSL/HTTPS** (automático em Vercel/Netlify)

3. **Monitorar performance** com ferramentas como Lighthouse

4. **Integrar com API-Football** para dados em tempo real

---

## Suporte

Se tiver dúvidas:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

**Seu site estará permanentemente online em poucos minutos!** 🎉

