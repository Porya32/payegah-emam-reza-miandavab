// script.js

function login() { const username = document.getElementById("username").value.trim(); const password = document.getElementById("password").value.trim(); const error = document.getElementById("error");

if (!username || !password) { error.textContent = "لطفاً نام کاربری و رمز عبور را وارد کنید."; return; }

localStorage.setItem("username", username);

// نقش‌ها if (password === "owner123") { localStorage.setItem("role", "owner"); window.location.href = "owner_panel.html"; } else if (password === "admin123") { localStorage.setItem("role", "admin"); window.location.href = "admin_panel.html"; } else if (password === "user123") { localStorage.setItem("role", "user"); window.location.href = "user_panel.html"; } else { error.textContent = "رمز عبور نادرست است."; } }

