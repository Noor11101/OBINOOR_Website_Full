// حفظ موضع التمرير عند النقر على روابط nav فقط
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        // عند الانتقال إلى صفحة أخرى، ابدأ دائمًا من الأعلى
        localStorage.setItem("scrollPosition", 0);
    });
});

// ضبط الثيم الافتراضي أو استرجاع الثيم المحفوظ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    document.body.classList.add(savedTheme);

    // تجاهل موضع التمرير المحفوظ وابدأ من الأعلى عند تحديث الصفحة
    window.scrollTo(0, 0);

    // تحديث حالة الزر بناءً على الثيم الحالي
    const isDarkTheme = savedTheme === "dark-theme";
    document.getElementById("btnSwitch").checked = isDarkTheme;

    // تحديث حالة nav بناءً على موضع التمرير
    updateStickyNav();

    // تحديث nav و footer بناءً على الثيم الحالي
    updateNavAndFooterTheme();
});

// عند الضغط على زر التبديل
document.getElementById("btnSwitch").addEventListener("change", (event) => {
    if (event.target.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    }

    // تحديث nav و footer بناءً على الثيم الجديد
    updateNavAndFooterTheme();
});

// تعريف عنصر nav
const nav = document.querySelector("nav");

// إضافة مستمع للتمرير لتحديث حالة nav
window.addEventListener("scroll", () => {
    updateStickyNav();
    updateNavAndFooterTheme();
});

// دالة لتحديث حالة "sticky" للـ nav بناءً على موضع التمرير
function updateStickyNav() {
    nav.classList.toggle("sticky", window.scrollY > 0);
}

// دالة لتحديث ثيم nav و footer بناءً على وجود فئة "dark-theme"
function updateNavAndFooterTheme() {
    const footer = document.querySelector("footer");
    if (document.body.classList.contains("dark-theme")) {
        nav.classList.toggle("dark-theme", nav.classList.contains("sticky"));
        footer.classList.add("dark-theme");
    } else {
        nav.classList.remove("dark-theme");
        footer.classList.remove("dark-theme");
    }
}


// التبديل بيين الصور
// rotateButtonId
function setupProductImageControls(imageId, dotsContainerId ) {
    const productImage = document.getElementById(imageId);
    const colorDots = document.querySelectorAll(`#${dotsContainerId} .color-dot`);
    // const rotateButton = document.getElementById(rotateButtonId);
    // const rotateButton = document.getElementById(rotateButtonId);
    let isFront = true; // الحالة الافتراضية للصورة الأمامية
    
    // التبديل بين الصور حسب اللون
    colorDots.forEach(dot => {
          dot.addEventListener('click', () => {
                const imageUrl = dot.getAttribute('data-image-url');
                productImage.src = imageUrl;
    
                // إزالة اختيار اللون السابق
                colorDots.forEach(d => d.classList.remove('selected'));
    
                // إضافة التأثير للنقطة المختارة
                dot.classList.add('selected');
          });
    });
    
    // تدوير الصورة بين الأمامية والخلفية
    // rotateButton.addEventListener('click', () => {
    //       if (isFront) {
    //             productImage.src = productImage.getAttribute('data-back-src');
    //       } else {
    //             productImage.src = productImage.getAttribute('data-front-src');
    //       }
    //       isFront = !isFront; // عكس الحالة
    // });
    }
    
    // استدعاء الوظيفة لكل مجموعة من الصور
    //  'rotate-button1'
    setupProductImageControls('product-image1', 'color-dots1');
    setupProductImageControls('product-image2', 'color-dots2');
    // setupProductImageControls('product-image3', 'color-dots3');
    
    
 

// اشتراك البريد الإلكتروني
document.querySelector(".submit-email").addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.querySelector(".subscription").classList.add("done");
});
var label = document.getElementById("id_username");
label && label.parentNode.removeChild(label);




// Contact Us

const form = document.querySelector("form"),
  name = document.getElementById("Name"),
  email = document.getElementById("email"),
  company = document.getElementById("company"),
  message = document.getElementById("message");
function sendEmail() {
  let e = `Name: ${Name.value} <br> 
  Email: ${email.value}<br> Company: ${company.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken: "e03b94b8-af5e-468d-9ba0-af51ab1abb01",
    To: "nooralhamshari70@gmail.com",
    From: "nooralhamshari70@gmail.com",
    Subject: company.value,
    Body: e,
  }).then((e) => {
    "OK" == e &&
      Swal.fire({
        title: "Success!",
        text: "message sent successfully!",
        icon: "success",
      });
  });
}
function checkEmail() {
  let e = document.querySelector(".error-txt.email");
  email.value.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/)
    ? (email.classList.remove("error"),
      email.parentElement.classList.remove("error"))
    : (email.classList.add("error"),
      email.parentElement.classList.add("error"),
      "" != email.value
        ? (e.innerText = "Enter a Valid email address")
        : (e.innerText = "Email Address Can't be blank"));
}
form.addEventListener("submit", (e) => {
  e.preventDefault(), sendEmail();
}),
  form.addEventListener("submit", (e) => {
    if (
      (e.preventDefault(),
      checkInput(),
      !name.classList.contains("error") &&
        !email.classList.contains("error") &&
        !company.classList.contains("error") &&
        !message.classList.contains("error"))
    )
      return sendEmail(), form.reset(), !1;
  });


//  activation    

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((e) => {
  e.href === window.location.href &&
    (document.querySelector(".nav-link.active")?.classList.remove("active"),
    e.classList.add("active"));
}),
  document.querySelector(".submit-email").addEventListener("mousedown", (e) => {
    e.preventDefault(),
      document.querySelector(".subscription").classList.add("done");
  });
var label = document.getElementById("id_username");
label && label.parentNode.removeChild(label);



// للتواصل 
function open_bag_Multipurpose_WhatsApp() {
  const phoneNumber = "+201092046314"; // Replace with the recipient's WhatsApp number
  const message = "Hello! I am interested in the Multipurpose bag."; // Replace with your default message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function open_bag_sustainably_WhatsApp() {
  const phoneNumber = "+201092046314"; // Replace with the recipient's WhatsApp number
  const message = "Hello! I am interested in the sustainably bag."; // Replace with your default message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}






// footer 
function openWhatsApp() {
    const phoneNumber = "+201092046314"; // Replace with the recipient's WhatsApp number
    const message = "Hello! I would like to contact you."; // Replace with your default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


