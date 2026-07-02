document.querySelector('.fa-bars').addEventListener('click', ()=> {
    document.querySelector(".nav-items").classList.toggle("active");
});

<script>
  const counters = document.querySelectorAll('.counter');
  const speed = 150; // السرعة

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
</script>






// الكود داخل login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();  // منع إعادة تحميل الصفحة

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // تحقق من صحة اسم المستخدم وكلمة المرور
  if (username === "admin" && password === "12345") {
    // إذا كانت صحيحة، يتم التوجيه إلى الصفحة الرئيسية
    window.location.href = "index.html";  // الرابط إلى الصفحة الرئيسية
  } else {
    // إذا كانت البيانات خاطئة
    alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
  }
});





function checkLogin() {
  console.log("تم تنفيذ checkLogin");
}

