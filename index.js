const heroSection = document.querySelector('.section-hero');

//========================================
//Creating a responsive navbar component
//========================================

const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerElem = document.querySelector('.header');

// const toggleNavbar = () => {
//   // alert("hi");
//   nav_header.classList.toggle('active');
// };

mobile_nav.addEventListener('click', () =>
  headerElem.classList.toggle('active')
);
//========================================
//Creating a portfolio tabbed component
//========================================
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add('sticky')
      : document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heroSection);

//========================================
//Creating a portfolio tabbed component
//========================================

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove('p-btn-active'));

  p_btn_clicked.classList.add('p-btn-active');

  // to find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add('p-img-not-active'));

  img_active.forEach((curElem) => curElem.classList.remove('p-img-not-active'));
});

// Our Swiper Section

new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ========================================
//  how to add media queries in JS
// ========================================
function myFunction(widthSize) {
  if (widthSize.matches) {
    // If media query matches
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

const widthSize = window.matchMedia('(max-width: 560px)');
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);

// const myJsmedia = (widthSize) => {
//   if (widthSize.matches) {
//     new Swiper('.mySwiper', {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     });
//   } else {
//     new Swiper('.mySwiper', {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     });
//   }
// };

// const widthSize = window.matchMedia('(max-width:560px)');
// // Call listener function at run time
// widthSize(widthSize);
// // Attach listener function on state changes
// widthSize.addEventListener('change', myJsmedia);

// ========================================
//  scroll to top
// ========================================

// const heroSection = document.querySelector('.section-hero');

const footerElm = document.querySelector('.section-footer');

const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style');

// I am adding the button element inside the div element
scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElm.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: 'smooth' });
};

scrollElement.addEventListener('click', scrollTop);

// Animate Number Counter

const counterNum = document.querySelectorAll('.counter-numbers');

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});

// Loading Lazy images

const imgRef = document.querySelector('img[data-src]');
console.log(imgRef);

const lazyImg = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
  // rootMargin: "100px",
});

imgObserver.observe(imgRef);
