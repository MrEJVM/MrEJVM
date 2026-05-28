// ===== FUNÇÃO PARA MENSAGEM =====
function mostrarMensagem(rede) {
    // Cria elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.textContent = `🔴 ${rede}: Em breve disponível! 🌋`;
    notificacao.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #cc3300, #8b0000);
        color: #fff;
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: bold;
        z-index: 1000;
        animation: slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        border: 1px solid #ff6600;
        font-family: monospace;
        letter-spacing: 1px;
    `;
    
    document.body.appendChild(notificacao);
    
    // Remove notificação após 3 segundos
    setTimeout(() => {
        notificacao.remove();
    }, 3000);
}

// ===== ANIMAÇÃO DE PARTÍCULAS DE LAVA =====
function criarParticulas() {
    const numParticulas = 30;
    
    for(let i = 0; i < numParticulas; i++) {
        const particula = document.createElement('div');
        particula.className = 'particle';
        
        // Propriedades aleatórias
        const tamanho = Math.random() * 6 + 2;
        const posX = Math.random() * window.innerWidth;
        const duracao = Math.random() * 8 + 4;
        const delay = Math.random() * 5;
        
        particula.style.cssText += `
            left: ${posX}px;
            width: ${tamanho}px;
            height: ${tamanho}px;
            animation-duration: ${duracao}s;
            animation-delay: -${delay}s;
            background: radial-gradient(circle, #ff6600, ${Math.random() > 0.5 ? '#ff4500' : '#cc3300'});
        `;
        
        document.body.appendChild(particula);
        
        // Remove partícula após animação
        particula.addEventListener('animationend', () => {
            particula.remove();
        });
    }
}

// ===== EFEITO DE FUMACA AO PASSAR MOUSE =====
document.querySelectorAll('.link-card').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const smoke = document.createElement('div');
        smoke.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, rgba(255,69,0,0.2) 0%, transparent 70%);
            border-radius: 50px;
            pointer-events: none;
            animation: smokeRise 0.5s ease-out forwards;
        `;
        
        link.style.position = 'relative';
        link.appendChild(smoke);
        
        setTimeout(() => smoke.remove(), 500);
    });
});

// ===== ANIMAÇÕES CSS ADICIONAIS =====
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
    
    @keyframes smokeRise {
        0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.8);
        }
        50% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px) scale(1.5);
        }
    }
    
    @keyframes lavaFlow {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
    
    /* Efeito de tremor no container */
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
    
    .container:hover {
        animation: shake 0.2s ease-in-out 2;
    }
`;
document.head.appendChild(styleSheet);

// ===== INICIALIZAÇÃO =====
// Cria partículas a cada 3 segundos
setInterval(criarParticulas, 3000);

// Cria partículas iniciais
criarParticulas();

// ===== EFEITO DE TREMOR SIMULANDO VULCÃO =====
let tremorTimeout;
function simularTremor() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.animation = 'shake 0.3s ease-in-out';
        setTimeout(() => {
            container.style.animation = '';
        }, 300);
    }
    
    // Próximo tremor entre 10 e 30 segundos
    const proximoTremor = Math.random() * 20000 + 10000;
    tremorTimeout = setTimeout(simularTremor, proximoTremor);
}

// Inicia simulação de tremores
simularTremor();

// ===== LOG NO CONSOLE =====
console.log('%c🌋 CARTÃO DIGITAL VULCÂNICO ATIVADO! 🔥', 'color: #ff6600; font-size: 16px; font-weight: bold;');
console.log('%cBem-vindo ao meu perjeto vulcânico!', 'color: #ff9966; font-size: 12px;');
