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
    notificacao.style.animation = 'slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards';
    
    document.body.appendChild(notificacao);
    
    setTimeout(function() {
        if (notificacao.remove) notificacao.remove();
    }, 3000);
}

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
`;
document.head.appendChild(styleSheet);

console.log('%c🌋 CARTÃO DIGITAL VULCÂNICO ATIVADO! 🔥', 'color: #ff6600; font-size: 16px; font-weight: bold;');
