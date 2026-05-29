// ===== FUNÇÃO PARA MENSAGEM =====
function mostrarMensagem(rede) {
    var notificacao = document.createElement('div');
    notificacao.textContent = '🔴 ' + rede + ': Em breve disponível! 🌋';
    notificacao.style.position = 'fixed';
    notificacao.style.bottom = '20px';
    notificacao.style.left = '50%';
    notificacao.style.transform = 'translateX(-50%)';
    notificacao.style.background = 'linear-gradient(135deg, #cc3300, #8b0000)';
    notificacao.style.color = '#fff';
    notificacao.style.padding = '12px 24px';
    notificacao.style.borderRadius = '50px';
    notificacao.style.fontWeight = 'bold';
    notificacao.style.zIndex = '1000';
    notificacao.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    notificacao.style.border = '1px solid #ff6600';
    notificacao.style.fontFamily = 'monospace';
    notificacao.style.letterSpacing = '1px';
    notificacao.style.animation = 'slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards';
    
    document.body.appendChild(notificacao);
    
    setTimeout(function() {
        if (notificacao && notificacao.remove) notificacao.remove();
    }, 3000);
}

// ===== ANIMAÇÃO DE PARTÍCULAS DE LAVA =====
function criarParticulas() {
    var numParticulas = 30;
    
    for(var i = 0; i < numParticulas; i++) {
        var particula = document.createElement('div');
        particula.className = 'particle';
        
        var tamanho = Math.random() * 6 + 2;
        var posX = Math.random() * window.innerWidth;
        var duracao = Math.random() * 8 + 4;
        var delay = Math.random() * 5;
        
        particula.style.left = posX + 'px';
        particula.style.width = tamanho + 'px';
        particula.style.height = tamanho + 'px';
        particula.style.animationDuration = duracao + 's';
        particula.style.animationDelay = '-' + delay + 's';
        particula.style.background = 'radial-gradient(circle, #ff6600, ' + (Math.random() > 0.5 ? '#ff4500' : '#cc3300') + ')';
        
        document.body.appendChild(particula);
        
        particula.addEventListener('animationend', function() {
            if (this && this.remove) this.remove();
        });
    }
}

// ===== EFEITO DE FUMACA AO PASSAR MOUSE =====
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.link-card');
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseenter', function(e) {
            var link = this;
            var smoke = document.createElement('div');
            smoke.style.position = 'absolute';
            smoke.style.bottom = '0';
            smoke.style.left = '50%';
            smoke.style.transform = 'translateX(-50%)';
            smoke.style.width = '100%';
            smoke.style.height = '100%';
            smoke.style.background = 'radial-gradient(ellipse at center, rgba(255,69,0,0.2) 0%, transparent 70%)';
            smoke.style.borderRadius = '50px';
            smoke.style.pointerEvents = 'none';
            smoke.style.animation = 'smokeRise 0.5s ease-out forwards';
            
            link.style.position = 'relative';
            link.appendChild(smoke);
            
            setTimeout(function() {
                if (smoke && smoke.remove) smoke.remove();
            }, 500);
        });
    }
});

// ===== ANIMAÇÕES CSS ADICIONAIS =====
var styleSheet = document.createElement("style");
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
var particulaInterval = null;

function iniciarParticulas() {
    if (particulaInterval) clearInterval(particulaInterval);
    criarParticulas();
    particulaInterval = setInterval(criarParticulas, 3000);
}

// ===== EFEITO DE TREMOR SIMULANDO VULCÃO =====
var tremorTimeout = null;

function simularTremor() {
    var container = document.querySelector('.container');
    if (container) {
        container.style.animation = 'shake 0.3s ease-in-out';
        setTimeout(function() {
            if (container) container.style.animation = '';
        }, 300);
    }
    
    var proximoTremor = Math.random() * 20000 + 10000;
    tremorTimeout = setTimeout(simularTremor, proximoTremor);
}

// ===== INICIAR TUDO =====
document.addEventListener('DOMContentLoaded', function() {
    iniciarParticulas();
    simularTremor();
    
    console.log('%c🌋 CARTÃO DIGITAL VULCÂNICO ATIVADO! 🔥', 'color: #ff6600; font-size: 16px; font-weight: bold;');
    console.log('%cBem-vindo ao meu projeto vulcânico!', 'color: #ff9966; font-size: 12px;');
});

// Limpar ao sair
window.addEventListener('beforeunload', function() {
    if (particulaInterval) clearInterval(particulaInterval);
    if (tremorTimeout) clearTimeout(tremorTimeout);
});
