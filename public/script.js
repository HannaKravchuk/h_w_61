const msg = document.getElementById('message');

registerForm.onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: rUser.value,
      password: rPass.value,
      role: rRole.value
    })
  });
  msg.textContent = await res.text();
};

loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: lUser.value,
      password: lPass.value
    })
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    window.location = '/dashboard.html';
  } else {
    msg.textContent = 'Login error. Please try again.';
  }
};
