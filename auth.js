/********************************
 * Basic Mock Authentication
 * Using localStorage as an example
 ********************************/

/**
 * Displays a toast message in the #toast-container
 * @param {string} message - The message to display
 * @param {('success'|'error')} [type='success'] - The toast type
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  // Create toast element
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type === 'error' ? 'toast--error' : 'toast--success');
  toast.textContent = message;

  // Append to container
  container.appendChild(toast);

  // Remove the toast automatically after 4s (matches CSS animation)
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// ----- SIGNUP -----
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (password !== confirm) {
      showToast('Passwords do not match!', 'error');
      return;
    }

    // Save user to localStorage (for demonstration)
    const userData = {
      name: name,
      email: email,
      password: password
    };
    localStorage.setItem('user_' + email, JSON.stringify(userData));

    showToast('Sign up successful! You can now log in.', 'success');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500); // slight delay so user sees toast
  });
}

// ----- LOGIN -----
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = localStorage.getItem('user_' + email);
    if (!storedUser) {
      showToast('User not found. Please sign up first.', 'error');
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.password === password) {
      showToast('Login successful!', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      showToast('Incorrect password.', 'error');
    }
  });
}
