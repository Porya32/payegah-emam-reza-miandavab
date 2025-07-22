function loginUser() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  fetch('user.json')
    .then(res => {
      if (!res.ok) throw new Error("خطا در دریافت اطلاعات کاربران");
      return res.json();
    })
    .then(data => {
      const user = data.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "panel.html";
      } else {
        alert("❌ نام کاربری یا رمز عبور اشتباه است");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("⛔ خطا در بارگذاری کاربران");
    });
}
