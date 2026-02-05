# Instruções para Configurar os Downloads

## 📁 Onde Colocar os Arquivos

### 1. Criar a Pasta de Downloads
Crie uma pasta chamada `downloads` dentro da pasta `public` do seu projeto:

```
c:\Users\Gabriel\Engenho-Sao-Bento\public\downloads\
```

### 2. Adicionar os Arquivos
Coloque os 17 arquivos dentro da pasta `public/downloads/` com os seguintes nomes:

#### Catálogos
- `catalogo-produtos-2024.pdf`

#### Comercial
- `tabela-precos.pdf`
- `contrato-distribuicao.pdf`
- `formulario-cadastro.pdf`

#### Fichas Técnicas
- `ficha-tecnica-premium.pdf`
- `ficha-tecnica-tradicional.pdf`
- `ficha-tecnica-rapadura.pdf`

#### Certificações
- `certificado-qualidade.pdf`

#### Manuais
- `manual-boas-praticas.pdf`

#### Receitas
- `livro-receitas.pdf`

#### Institucional
- `historia-engenho.pdf`
- `politica-qualidade.pdf`
- `processo-producao.pdf`
- `apresentacao-institucional.pdf`

#### Guias
- `guia-degustacao.pdf`

#### Marketing
- `logotipos-marca.zip`
- `fotos-institucionais.zip`

---

## 🔧 Como Editar os Nomes e Informações dos Arquivos

### Arquivo Principal: `Downloads.tsx`
Localização: `c:\Users\Gabriel\Engenho-Sao-Bento\src\pages\Downloads\Downloads.tsx`

### Editando as Informações
Procure pelo array `downloadItems` (linha ~12) e edite as informações de cada arquivo:

```typescript
const downloadItems: DownloadItem[] = [
  {
    id: 1,
    name: 'Catálogo de Produtos 2024',        // Nome exibido
    description: 'Catálogo completo...',       // Descrição
    fileName: 'catalogo-produtos-2024.pdf',    // Nome do arquivo real
    fileSize: '2.5 MB',                        // Tamanho do arquivo
    category: 'Catálogos'                      // Categoria
  },
  // ... mais arquivos
];
```

### Campos Editáveis:
- **name**: O título que aparece no card
- **description**: A descrição do arquivo
- **fileName**: O nome EXATO do arquivo na pasta `public/downloads/`
- **fileSize**: O tamanho do arquivo (apenas visual)
- **category**: A categoria para agrupar os arquivos

---

## ✅ Ativando os Downloads Reais

### Passo 1: Descomente o Código
No arquivo `Downloads.tsx`, procure pela função `handleDownload` (linha ~133) e:

1. **Comente** ou **remova** esta linha:
```typescript
alert(`Download iniciado: ${itemName}\nArquivo: ${fileName}`);
```

2. **Descomente** estas linhas:
```typescript
const link = document.createElement('a');
link.href = `/downloads/${fileName}`;
link.download = fileName;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
```

### Código Final da Função:
```typescript
const handleDownload = (fileName: string, itemName: string) => {
  const link = document.createElement('a');
  link.href = `/downloads/${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

---

## 📋 Estrutura de Pastas Final

```
Engenho-Sao-Bento/
├── public/
│   └── downloads/           ← CRIAR ESTA PASTA
│       ├── catalogo-produtos-2024.pdf
│       ├── tabela-precos.pdf
│       ├── ficha-tecnica-premium.pdf
│       ├── ficha-tecnica-tradicional.pdf
│       ├── ficha-tecnica-rapadura.pdf
│       ├── certificado-qualidade.pdf
│       ├── manual-boas-praticas.pdf
│       ├── livro-receitas.pdf
│       ├── historia-engenho.pdf
│       ├── politica-qualidade.pdf
│       ├── guia-degustacao.pdf
│       ├── processo-producao.pdf
│       ├── logotipos-marca.zip
│       ├── fotos-institucionais.zip
│       ├── contrato-distribuicao.pdf
│       ├── formulario-cadastro.pdf
│       └── apresentacao-institucional.pdf
├── src/
│   └── pages/
│       └── Downloads/
│           ├── Downloads.tsx    ← Arquivo principal
│           └── Downloads.scss   ← Estilos
```

---

## 🎨 Personalizações Adicionais

### Adicionar Mais Arquivos
Para adicionar mais arquivos, adicione um novo objeto ao array `downloadItems`:

```typescript
{
  id: 18,  // Próximo ID
  name: 'Nome do Novo Arquivo',
  description: 'Descrição do arquivo',
  fileName: 'nome-do-arquivo.pdf',
  fileSize: '1.5 MB',
  category: 'Categoria Existente ou Nova'
}
```

### Criar Nova Categoria
Basta usar um novo nome em `category` e ela será criada automaticamente:

```typescript
category: 'Minha Nova Categoria'
```

---

## 🚀 Como Testar

1. Coloque os arquivos na pasta `public/downloads/`
2. Descomente o código de download real
3. Execute o projeto: `npm run dev`
4. Acesse: `http://localhost:5173/downloads`
5. Clique em qualquer botão "Baixar"

---

## ⚠️ Observações Importantes

- Os arquivos devem estar na pasta `public/downloads/` para serem acessíveis
- Os nomes dos arquivos em `fileName` devem corresponder EXATAMENTE aos nomes reais
- O tamanho do arquivo (`fileSize`) é apenas visual, não afeta o download
- Você pode usar arquivos PDF, ZIP, DOC, XLS, etc.
