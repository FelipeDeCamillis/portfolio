# Portfólio Digital - Minimalista e Elegante

Um portfólio profissional minimalista e elegante com design inspirador, focado em transmitir profundidade intelectual e segurança técnica para recrutadores e profissionais de RH.

## ✨ Características

- **Design Minimalista**: Interface limpa e elegante em preto e branco
- **Fundo Estrelado**: Efeito de estrelas com paralaxe suave
- **Frases Inspiradoras**: Rotação automática de citações de grandes pensadores
- **Animações Suaves**: Transições elegantes e efeitos de hover
- **Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Código otimizado e carregamento rápido

## 🚀 Como Usar

1. **Clone ou baixe** os arquivos do projeto
2. **Personalize** o conteúdo no arquivo `index.html`
3. **Ajuste** as cores e estilos no arquivo `css/style.css`
4. **Modifique** as funcionalidades no arquivo `js/script.js`
5. **Abra** o arquivo `index.html` no navegador

## 📁 Estrutura do Projeto

```
portfolio-digital/
├── index.html          # Estrutura principal do site
├── css/
│   └── style.css       # Estilos e animações
├── js/
│   └── script.js       # Funcionalidades interativas
├── images/             # Pasta para imagens (opcional)
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Alterando Informações Pessoais

No arquivo `index.html`, edite as seguintes seções:

```html
<!-- Seu nome -->
<h1 class="section-title">Seu Nome</h1>

<!-- Sua descrição -->
<p class="section-subtitle">Sua Profissão</p>

<!-- Seu texto de apresentação -->
<p class="about-text">
    Sua descrição pessoal aqui...
</p>
```

### Adicionando/Editando Projetos

Cada projeto está estruturado assim:

```html
<article class="project-card">
    <div class="project-icon">
        <!-- Ícone SVG do projeto -->
    </div>
    <h3 class="project-title">Nome do Projeto</h3>
    <p class="project-description">Descrição do projeto...</p>
    <div class="project-tech">
        <span class="tech-tag">Tecnologia 1</span>
        <span class="tech-tag">Tecnologia 2</span>
    </div>
    <div class="project-links">
        <a href="link-github" class="project-link">GitHub</a>
        <a href="link-demo" class="project-link">Demo</a>
    </div>
</article>
```

### Modificando Frases Inspiradoras

No arquivo `js/script.js`, edite o array `quotes`:

```javascript
const quotes = [
    {
        text: "Sua frase inspiradora aqui.",
        author: "Nome do Autor"
    },
    // Adicione mais frases...
];
```

### Alterando Cores e Estilos

No arquivo `css/style.css`, você pode modificar:

- **Cores principais**: Procure por `#000000` (preto) e `#ffffff` (branco)
- **Transparências**: Ajuste valores `rgba()` para efeitos de transparência
- **Fontes**: Modifique a família de fontes no início do arquivo
- **Animações**: Ajuste durações e efeitos nas seções `@keyframes`

## 🔧 Configurações Avançadas

### Número de Estrelas

No arquivo `js/script.js`, altere a constante:

```javascript
const STAR_COUNT = 200; // Aumente ou diminua conforme desejado
```

### Velocidade das Frases

Para alterar o tempo entre as frases:

```javascript
setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showQuote(currentQuoteIndex);
}, 5000); // 5000ms = 5 segundos
```

### Efeito de Paralaxe

Ajuste a intensidade do efeito de paralaxe:

```javascript
const speed = (index % 3 + 1) * 0.1; // Modifique o 0.1 para mais ou menos intensidade
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop**: Layout completo com grid de 2 colunas
- **Tablet**: Grid de 1 coluna com espaçamentos ajustados
- **Mobile**: Layout otimizado para telas pequenas

## 🎯 Otimizações Incluídas

- **Performance**: Throttling no scroll para 60fps
- **Acessibilidade**: Estrutura semântica HTML5
- **SEO**: Meta tags otimizadas
- **Carregamento**: Fontes pré-carregadas
- **Animações**: CSS transforms para melhor performance

## 🌟 Recursos Especiais

- **Efeito de Partículas**: Clique nos cards para ver partículas
- **Efeito de Digitação**: Nome aparece com efeito de máquina de escrever
- **Hover Effects**: Animações suaves nos elementos interativos
- **Smooth Scroll**: Navegação suave entre seções

## 📞 Suporte

Para dúvidas ou sugestões:

1. Verifique se todos os arquivos estão na mesma pasta
2. Certifique-se de que o navegador suporta JavaScript ES6+
3. Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge)

## 📄 Licença

Este projeto é de uso livre para portfólios pessoais e profissionais.

---

**Construído com paixão e código** 💻✨ 