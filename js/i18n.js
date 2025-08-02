// Sistema de Internacionalização (i18n)

// Objeto com todas as traduções
const translations = {
    pt: {
        'page-title': 'Portfólio Felipe De Camillis',
        'lang-pt': 'Português',
        'lang-en': 'English',
        'lang-es': 'Español',
        'lang-zh': '中文',
        'subtitle': 'Desenvolvedor & Cientista da Computação',
        'about-text': 'Apaixonado por tecnologia, inovação e o poder transformador da computação. Dedico-me a criar soluções elegantes que conectam pessoas e ideias através do código.',
        'languages-title': 'Linguagens',
        'technologies-title': 'Tecnologias',
        'projects-title': 'Projetos',
        'projects-subtitle': 'Explorando a fronteira entre código e criatividade',
        'project1-title': 'Sistema de Análise de Dados',
        'project1-desc': 'Plataforma avançada para análise e visualização de dados em tempo real, implementando algoritmos de machine learning para insights preditivos.',
        'project2-title': 'Aplicação de IA Conversacional',
        'project2-desc': 'Chatbot inteligente baseado em processamento de linguagem natural, capaz de compreender contexto e fornecer respostas humanizadas.',
        'project3-title': 'Plataforma de E-commerce',
        'project3-desc': 'Sistema completo de e-commerce com gestão de produtos, processamento de pagamentos e análise de vendas em tempo real.',
        'project4-title': 'Sistema de Monitoramento',
        'project4-desc': 'Dashboard de monitoramento de infraestrutura com alertas inteligentes, métricas em tempo real e visualizações interativas.',
        'contact-title': 'Conecte-se',
        'contact-subtitle': 'Vamos criar algo extraordinário juntos',
        'linkedin-label': 'LinkedIn',
        'github-label': 'GitHub',
        'footer-text': '© 2025 Felipe de Camillis. Construído com paixão e código.'
    },
    en: {
        'page-title': 'Felipe De Camillis Portfolio',
        'lang-pt': 'Português',
        'lang-en': 'English',
        'lang-es': 'Español',
        'lang-zh': '中文',
        'subtitle': 'Developer & Computer Scientist',
        'about-text': 'Passionate about technology, innovation and the transformative power of computing. I dedicate myself to creating elegant solutions that connect people and ideas through code.',
        'languages-title': 'Languages',
        'technologies-title': 'Technologies',
        'projects-title': 'Projects',
        'projects-subtitle': 'Exploring the frontier between code and creativity',
        'project1-title': 'Data Analysis System',
        'project1-desc': 'Advanced platform for real-time data analysis and visualization, implementing machine learning algorithms for predictive insights.',
        'project2-title': 'Conversational AI Application',
        'project2-desc': 'Intelligent chatbot based on natural language processing, capable of understanding context and providing humanized responses.',
        'project3-title': 'E-commerce Platform',
        'project3-desc': 'Complete e-commerce system with product management, payment processing and real-time sales analysis.',
        'project4-title': 'Monitoring System',
        'project4-desc': 'Infrastructure monitoring dashboard with intelligent alerts, real-time metrics and interactive visualizations.',
        'contact-title': 'Connect',
        'contact-subtitle': 'Let\'s create something extraordinary together',
        'linkedin-label': 'LinkedIn',
        'github-label': 'GitHub',
        'footer-text': '© 2025 Felipe de Camillis. Built with passion and code.'
    },
    es: {
        'page-title': 'Portafolio Felipe De Camillis',
        'lang-pt': 'Português',
        'lang-en': 'English',
        'lang-es': 'Español',
        'lang-zh': '中文',
        'subtitle': 'Desarrollador y Científico de la Computación',
        'about-text': 'Apasionado por la tecnología, la innovación y el poder transformador de la computación. Me dedico a crear soluciones elegantes que conectan personas e ideas a través del código.',
        'languages-title': 'Lenguajes',
        'technologies-title': 'Tecnologías',
        'projects-title': 'Proyectos',
        'projects-subtitle': 'Explorando la frontera entre código y creatividad',
        'project1-title': 'Sistema de Análisis de Datos',
        'project1-desc': 'Plataforma avanzada para análisis y visualización de datos en tiempo real, implementando algoritmos de machine learning para insights predictivos.',
        'project2-title': 'Aplicación de IA Conversacional',
        'project2-desc': 'Chatbot inteligente basado en procesamiento de lenguaje natural, capaz de comprender contexto y proporcionar respuestas humanizadas.',
        'project3-title': 'Plataforma de E-commerce',
        'project3-desc': 'Sistema completo de e-commerce con gestión de productos, procesamiento de pagos y análisis de ventas en tiempo real.',
        'project4-title': 'Sistema de Monitoreo',
        'project4-desc': 'Dashboard de monitoreo de infraestructura con alertas inteligentes, métricas en tiempo real y visualizaciones interactivas.',
        'contact-title': 'Conecta',
        'contact-subtitle': 'Vamos a crear algo extraordinario juntos',
        'linkedin-label': 'LinkedIn',
        'github-label': 'GitHub',
        'footer-text': '© 2025 Felipe de Camillis. Construido con pasión y código.'
    },
    zh: {
        'page-title': 'Felipe De Camillis 作品集',
        'lang-pt': 'Português',
        'lang-en': 'English',
        'lang-es': 'Español',
        'lang-zh': '中文',
        'subtitle': '开发者 & 计算机科学家',
        'about-text': '对技术、创新和计算的变革力量充满热情。我致力于创建优雅的解决方案，通过代码连接人与思想。',
        'languages-title': '编程语言',
        'technologies-title': '技术栈',
        'projects-title': '项目',
        'projects-subtitle': '探索代码与创意的边界',
        'project1-title': '数据分析系统',
        'project1-desc': '先进的实时数据分析和可视化平台，实现机器学习算法以获得预测性洞察。',
        'project2-title': '对话式AI应用',
        'project2-desc': '基于自然语言处理的智能聊天机器人，能够理解上下文并提供人性化的回应。',
        'project3-title': '电商平台',
        'project3-desc': '完整的电商系统，包含产品管理、支付处理和实时销售分析。',
        'project4-title': '监控系统',
        'project4-desc': '基础设施监控仪表板，具有智能警报、实时指标和交互式可视化。',
        'contact-title': '联系我',
        'contact-subtitle': '让我们一起创造非凡的作品',
        'linkedin-label': 'LinkedIn',
        'github-label': 'GitHub',
        'footer-text': '© 2025 Felipe de Camillis. 用热情和代码构建。'
    }
};

// Configurações
const defaultLanguage = 'en';
const supportedLanguages = ['pt', 'en', 'es', 'zh'];

// Estado atual
let currentLanguage = defaultLanguage;

// Inicialização do sistema i18n
function initializeI18n() {
    // Detectar idioma do navegador
    const browserLanguage = detectBrowserLanguage();
    
    // Verificar se há idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    
    // Determinar idioma inicial
    const initialLanguage = savedLanguage || browserLanguage || defaultLanguage;
    
    // Aplicar idioma
    setLanguage(initialLanguage);
    
    // Configurar event listeners
    setupLanguageSelector();
}

// Detectar idioma do navegador
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Verificar se o idioma é suportado
    if (supportedLanguages.includes(langCode)) {
        return langCode;
    }
    
    return defaultLanguage;
}

// Configurar seletor de idioma
function setupLanguageSelector() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const languageSelector = document.querySelector('.language-selector');
    
    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSelector.classList.toggle('active');
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('active');
        }
    });
    
    // Event listeners para opções de idioma
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageSelector.classList.remove('active');
        });
    });
}

// Definir idioma
function setLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
        lang = defaultLanguage;
    }
    
    currentLanguage = lang;
    
    // Salvar preferência
    localStorage.setItem('preferred-language', lang);
    
    // Aplicar traduções
    applyTranslations(lang);
    
    // Atualizar interface do seletor
    updateLanguageSelector(lang);
}

// Aplicar traduções
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-key]');
    const langTranslations = translations[lang];
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (langTranslations && langTranslations[key]) {
            // Se for o título da página, atualizar o document.title também
            if (key === 'page-title') {
                document.title = langTranslations[key];
            }
            element.textContent = langTranslations[key];
        }
    });
    
    // Atualizar frases inspiradoras se a função existir
    if (typeof updateQuotesLanguage === 'function') {
        updateQuotesLanguage();
    }
}

// Atualizar interface do seletor
function updateLanguageSelector(lang) {
    // Atualizar opções ativas
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Obter idioma atual
function getCurrentLanguage() {
    return currentLanguage;
}

// Exportar funções para uso global
window.i18n = {
    init: initializeI18n,
    setLanguage: setLanguage,
    getCurrentLanguage: getCurrentLanguage
};