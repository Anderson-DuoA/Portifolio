document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const usuario = event.target[0].value;
    const senha = event.target[1].value;
  
    if (usuario === 'admin' && senha === '1234') {
      alert('Login bem-sucedido! Bem-vindo, ' + usuario);
      window.location.href = 'index.html'; // Redireciona para a home
    } else {
      alert('Usuário ou senha incorretos.');
    }
  });
  