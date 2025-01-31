console.time("Execution Time");

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // إظهار الزر عند التمرير
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // عند الضغط على الزر، الانتقال إلى أعلى الصفحة
  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



document.getElementById("toggleLinks").addEventListener("click", function () {
  var linkList = document.getElementById("linkList");
  // تحقق من حالة العرض وإظهار أو إخفاء القائمة
  if (linkList.style.display === "none" || linkList.style.display === "") {
      linkList.style.display = "block"; // إظهار القائمة
  } else {
      linkList.style.display = "none"; // إخفاء القائمة
  }
});
// Function to load images lazily
function lazyLoad() {
  const lazyImages = document.querySelectorAll(".lazy-image");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src; // Set the actual image source
        lazyImage.classList.remove("lazy-image");
        observer.unobserve(lazyImage); // Stop observing after loading
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
}

// Initialize lazy loading when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", lazyLoad);

// المتغيرات لحفظ الصور ومؤشر الصورة الحالية
var currentSlideIndex = 0;
var images = document.querySelectorAll(".card img");

// فتح الصورة في العرض الكامل
function openFullscreen(src) {
  var overlay = document.getElementById("fullscreenOverlay");
  var img = document.getElementById("fullscreenImg");
  img.src = src;

  // تعيين الصورة الحالية حسب المصدر
  currentSlideIndex = Array.from(images).findIndex(
    (image) => image.src === src
  );
  overlay.style.display = "flex";
}

// إغلاق العرض الكامل
function closeFullscreen() {
  var overlay = document.getElementById("fullscreenOverlay");
  overlay.style.display = "none";
}

// تغيير الصورة بالسلايد
function changeSlide(direction) {
  currentSlideIndex += direction;

  // إذا وصلنا إلى نهاية الصور، نعود إلى البداية أو النهاية
  if (currentSlideIndex >= images.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = images.length - 1;
  }

  // تغيير الصورة المعروضة
  var img = document.getElementById("fullscreenImg");
  img.src = images[currentSlideIndex].src;
}




// الحصول على جميع العناصر h3 داخل .portfolio-content .card .info
const cardTitles = document.querySelectorAll(".portfolio-content .card .info h3");

// تعيين عناوين جديدة لكل عنصر
cardTitles.forEach((title, index) => {
  title.textContent = `مشروع  ${index + 1}`; // يمكنك تعديل النص ليكون ما يناسبك
});


console.timeEnd("Execution Time");