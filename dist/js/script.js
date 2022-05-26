// hamburger menu
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

// console.log(humberger);
humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != humberger && e.target != navMenu) {
    humberger.classList.remove("humberger-active");
    navMenu.classList.add("hidden");
  }
});

// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// DarkMod Toggel
const darkToggel = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggel.addEventListener("click", function () {
  if (darkToggel.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggel.checked = true;
} else {
  darkToggel.checked = false;
}

const dataGambar = [
  {
    title: "Membuat Portofolio",
    img: "ssProject.png",
    penjelasan:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laborum expedita autem ipsa ratione dolor!",
  },
  {
    title: "Mern-Blog",
    img: "Home.png",
    penjelasan:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laborum expedita autem ipsa ratione dolor!",
  },
];
const isiPortofolio = (data) => {
  return `<div  class="mb-12 p-4 md:w-1/2" >
      <div class="overflow-hidden rounded-md shadow-md">
        <img src="dist/img/${data.img}" alt="Landing Page" width="w-full" class="object-cover" />
      </div>
      <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
        ${data.title}
      </h3>
      <p class="text-base font-medium text-slate-500">
        ${data.penjelasan}
      </p>
    </div>`;
};

const portofolio = document.querySelector("#gambar-portofolio");
dataGambar.forEach((data) => {
  return (portofolio.innerHTML += isiPortofolio(data));
});

const contentBlog = [
  {
    title: "Tips belajar programing",
    img: "https://source.unsplash.com/360x200?programming",
    penjelasan:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laborum expedita autem ipsa ratione dolor!",
  },
  {
    title: "Tips belajar basa pemerograman Python",
    img: "https://source.unsplash.com/360x200?python+code",
    penjelasan:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laborum expedita autem ipsa ratione dolor!",
  },
  {
    title: "Tips belajar bahasa javascript",
    img: "https://source.unsplash.com/360x200?javascript",
    penjelasan:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laborum expedita autem ipsa ratione dolor!",
  },
];

const isiBlog = (data) => {
  return `<div class="w-full px-4 lg:w-1/2 xl:w-1/3">
  <div
    class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-700"
  >
    <img
      src="${data.img}"
      alt="Programming"
      class="h-[200px] w-full"
    />
    <div class="h-[200px] py-8 px-6">
      <h3
        class="mb-3 truncate text-xl font-semibold capitalize text-dark dark:text-white"
      >
        ${data.title}
      </h3>
      <p class="mb-6 truncate text-base font-medium text-slate-500">
        ${data.penjelasan}
      </p>
      <a
        href="#"
        class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
        >baca selengkapnya</a
      >
    </div>
  </div>
</div>`;
};
const dataBlog = document.querySelector("#data-blog");

contentBlog.forEach((blog) => {
  return (dataBlog.innerHTML += isiBlog(blog));
});
