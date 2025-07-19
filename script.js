// دریافت اطلاعات از localStorage یا ساخت اولیه
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// ------------------- LOGIN -------------------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "panel.html";
    } else {
      document.getElementById("loginError").textContent = "نام کاربری یا رمز اشتباه است.";
    }
  });
}

// ------------------- SIGNUP -------------------
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value;
    const newRole = document.getElementById("newRole").value;

    if (users.find(u => u.username === newUsername)) {
      document.getElementById("signupError").textContent = "این نام کاربری قبلاً ثبت شده.";
      return;
    }

    const newUser = {
      username: newUsername,
      password: newPassword,
      role: newRole
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("ثبت‌نام با موفقیت انجام شد. حالا وارد شوید.");
    window.location.href = "login.html";
  });
}

// ------------------- PANEL -------------------
function loadUserInfo() {
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const userNameBox = document.getElementById("user-name-box");
  const userRoleBox = document.getElementById("user-role-box");
  if (userNameBox) userNameBox.textContent = currentUser.username;
  if (userRoleBox) userRoleBox.textContent = currentUser.role;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}