// Frases inspiradoras de grandes pensadores (multilíngues)
const quotes = {
    pt: [
    {
        text: "O universo não é obrigado a fazer sentido para você.",
        author: "Neil deGrasse Tyson"
    },
    {
        text: "A ciência não é apenas compatível com a espiritualidade; é uma fonte profunda de espiritualidade.",
        author: "Carl Sagan"
    },
    {
        text: "A maior descoberta de todos os tempos é que uma pessoa pode mudar seu futuro simplesmente mudando sua atitude.",
        author: "Oprah Winfrey"
    },
    {
        text: "A tecnologia é melhor quando ela conecta pessoas.",
        author: "Matt Mullenweg"
    },
    {
        text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "A inovação distingue entre um líder e um seguidor.",
        author: "Steve Jobs"
    },
    {
            text: "A imaginação é mais importante que o conhecimento.",
            author: "Albert Einstein"
        }
    ],
    en: [
        {
            text: "The universe is under no obligation to make sense to you.",
            author: "Neil deGrasse Tyson"
        },
        {
            text: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
            author: "Carl Sagan"
        },
        {
            text: "The greatest discovery of all time is that a person can change their future by merely changing their attitude.",
            author: "Oprah Winfrey"
        },
        {
            text: "Technology is best when it brings people together.",
            author: "Matt Mullenweg"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            text: "Imagination is more important than knowledge.",
            author: "Albert Einstein"
        }
    ],
    es: [
        {
            text: "El universo no está obligado a tener sentido para ti.",
            author: "Neil deGrasse Tyson"
        },
        {
            text: "La ciencia no solo es compatible con la espiritualidad; es una fuente profunda de espiritualidad.",
        author: "Carl Sagan"
    },
    {
            text: "El mayor descubrimiento de todos los tiempos es que una persona puede cambiar su futuro simplemente cambiando su actitud.",
            author: "Oprah Winfrey"
        },
        {
            text: "La tecnología es mejor cuando conecta a las personas.",
            author: "Matt Mullenweg"
        },
        {
            text: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "La innovación distingue entre un líder y un seguidor.",
            author: "Steve Jobs"
        },
        {
            text: "La imaginación es más importante que el conocimiento.",
        author: "Albert Einstein"
    }
    ],
    zh: [
        {
            text: "宇宙没有义务对你有意义。",
            author: "尼尔·德格拉斯·泰森"
        },
        {
            text: "科学不仅与精神性兼容；它是精神性的深刻源泉。",
            author: "卡尔·萨根"
        },
        {
            text: "有史以来最伟大的发现是，一个人仅仅通过改变态度就可以改变未来。",
            author: "奥普拉·温弗瑞"
        },
        {
            text: "技术在连接人们时是最好的。",
            author: "马特·穆伦韦格"
        },
        {
            text: "未来属于那些相信梦想之美的人。",
            author: "埃莉诺·罗斯福"
        },
        {
            text: "创新区分领导者和追随者。",
            author: "史蒂夫·乔布斯"
        },
        {
            text: "想象力比知识更重要。",
            author: "阿尔伯特·爱因斯坦"
        }
    ]
};

// Elementos DOM
let currentQuoteIndex = 0;
let quoteText;
let quoteAuthor;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeQuotes();
    initializeScrollAnimations();
    
    // Inicializar sistema de idiomas
    if (window.i18n) {
        window.i18n.init();
    }
});

// Inicializar partículas
function initializeParticles() {
    // Configuração das partículas carregada do arquivo JSON
    fetch('./js/particles-config.json')
        .then(response => response.json())
        .then(config => {
            particlesJS('particles-js', config);
        })
        .catch(error => {
            console.log('Erro ao carregar configuração das partículas:', error);
            // Fallback com configuração básica
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true
                    },
                    "size": {
                        "value": 1.5,
                        "random": true
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "top-left",
                        "random": true,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "resize": true
                    }
                },
                "retina_detect": true
            });
        });
}

// Sistema de frases inspiradoras
function initializeQuotes() {
    quoteText = document.getElementById('quote-text');
    quoteAuthor = document.getElementById('quote-author');
    
    // Mostrar primeira frase
    showQuote(currentQuoteIndex);
    
    // Trocar frase a cada 5 segundos
    setInterval(() => {
        updateQuoteForLanguage();
    }, 5000);
}

function updateQuoteForLanguage() {
    const currentLang = window.i18n ? window.i18n.getCurrentLanguage() : 'pt';
    const langQuotes = quotes[currentLang] || quotes['pt'];
    
    currentQuoteIndex = (currentQuoteIndex + 1) % langQuotes.length;
    showQuote(currentQuoteIndex);
}

function showQuote(index) {
    const currentLang = window.i18n ? window.i18n.getCurrentLanguage() : 'pt';
    const langQuotes = quotes[currentLang] || quotes['pt'];
    const quote = langQuotes[index];
    
    if (!quote) return;
    
    // Fade out
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        // Atualizar conteúdo
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author;
        
        // Fade in
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 500);
}

// Função para atualizar frases quando idioma muda
function updateQuotesLanguage() {
    showQuote(currentQuoteIndex);
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const fadeElements = document.querySelectorAll('.section-title, .section-subtitle, .about-text, .project-card, .contact-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Smooth scroll para links internos
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Efeito MagicCard nos cards de projeto e botões de contato
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar efeito aos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        addMagicCardEffect(card, 'translateY(-8px)', 'translateY(0)');
    });
    
    // Aplicar efeito aos botões de contato
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        addMagicCardEffect(item, 'translateY(-5px)', 'translateY(0)');
    });
});

// Função reutilizável para aplicar efeito MagicCard
function addMagicCardEffect(element, hoverTransform, defaultTransform) {
    element.addEventListener('mousemove', function(e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Aplicar posição do mouse como variáveis CSS
        element.style.setProperty('--mouse-x', x + 'px');
        element.style.setProperty('--mouse-y', y + 'px');
    });
    
    element.addEventListener('mouseenter', function() {
        this.style.transform = hoverTransform;
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = defaultTransform;
        // Reset da posição do mouse para fora do elemento
        element.style.setProperty('--mouse-x', '-200px');
        element.style.setProperty('--mouse-y', '-200px');
    });
}

// Efeito de digitação para o nome
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efeito de digitação quando a seção about estiver visível
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                typeWriter(entry.target, text, 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (nameElement) {
        observer.observe(nameElement);
    }
});

// Efeito de partículas interativas
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.backgroundColor = '#ffffff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    
    document.body.appendChild(particle);
    
    // Animação da partícula
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 3 + 1;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let opacity = 1;
    let posX = x;
    let posY = y;
    
    function animateParticle() {
        if (opacity <= 0) {
            document.body.removeChild(particle);
            return;
        }
        
        posX += vx;
        posY += vy;
        opacity -= 0.02;
        
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        particle.style.opacity = opacity;
        
        requestAnimationFrame(animateParticle);
    }
    
    animateParticle();
}

// Adicionar efeito de partículas ao clicar
document.addEventListener('click', function(e) {
    if (e.target.closest('.project-card') || e.target.closest('.contact-item')) {
        for (let i = 0; i < 5; i++) {
            createParticle(e.clientX, e.clientY);
        }
    }
});

// Preloader simples
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Otimização de performance - throttling para scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Aplicar throttling ao scroll
window.addEventListener('scroll', throttle(function() {
    // Funções que precisam ser executadas no scroll
}, 16)); // ~60fps 