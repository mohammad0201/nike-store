import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: " لذت یک ورزش عالی",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "جستجوی محصول",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "محبوب ترین ها",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "برای اقایان",
      rating: "4.9",
      btn: "ثبت خرید",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "برای اقایان",
      rating: "4.5",
      btn: "ثبت خرید",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "جستجو کنید",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "جستجو کنید",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "پرفروش ترین ها",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "برای اقایان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "برای اقایان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "برای اقایان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "برای بانوان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "برای اقایان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "برای اقایان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "برای اقایان",
      rating: "5+",
      btn: "ثبت خرید",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "بهترین ها",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "جیسون تیتوم، مدل امضاکننده برند جردن در چند سال گذشته، در این فصل در ایر جردن 37 حضور خواهد داشت، قبل از اینکه به طور بالقوه اولین کفش ورزشی امضای خود را با جامپمن، که اخیراً از طریق توییتر خود شایعه شده بود، در دست ساخت است.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "با رسیدن به زمان مناسب برای پاییز، این برداشت آینده از زوم فریک 4 ظاهراً از روز شکرگزاری الهام گرفته است. نارنجی و قهوه‌ای، دو عنصر اصلی تعطیلات، در سرتاسر قسمت بالایی استفاده می‌شوند و قسمت‌هایی را که در سایه‌های خاکستری قرار نمی‌گیرند، می‌پوشانند.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Nike Air Max Plus",
      text: "نایک ایر مکس پلاس در چند ماه اخیر از نمایان شدن چندین رنگ مختلف لذت برده است. و با شروع رسمی فصل پاییز، مجموعه دیگری به تقویم اضافه شده است، از جمله این رنگ خاکستری و نارنجی که به تازگی آشکار شده است.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "سری محبوب ای جی وان های ایرجردن ریترو با رنگ بندی محبوب با طعم اصلی انگشت زرد. این رنگ توسط نوازنده زک مایرز پی ای آشکار شد، تقریباً چهار سال بعد، متعصبان اردن بالاخره شات خود را در جی ار منتشر خواهند کرد.      ",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "بازی برد کالر وی  از زوم جی تی کات 2 برای اولین بار در این جمعه، برای نایک ممبرز نیشن در سراسر جهان منتشر می شود، در حالی که رنگ سابرینا لانس کاس برای تاریخ انتشار 13 اکتبر تعیین شده است. در ضمن، از تصاویر رسمی هر دو رنگ در زیر لذت ببرید.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Puma Announces Breanna",
      text: "برای اولین بار در بیش از یک دهه، یک سیلوئت بسکتبال برای یکی از بهترین و درخشان ترین ستاره های WNBA، برینا استوارت، دارنده مدال طلای المپیک و فوق ستاره طوفان سیاتل، ساخته می شود. پوما استیو 1 این جمعه در دسترس خواهد بود.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "از ضامن‌های توری گرفته تا تغییرات الهام‌گرفته از شهر، نایک ایر فورس 1 تعدادی تغییرات منحصر به فرد را ارائه کرده است. با این حال، در اینجا، این برند همه چیز را تا حدودی پایین می‌آورد و رنگی ساده را انتخاب می‌کند که عمدتاً با رنگ مشکی و نارنجی لیزری پوشیده شده است.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "دنیای سانریو گسترده و مملو از شخصیت های نمادین بسیاری است. با این حال، تعداد کمی از خانواده‌ها با نفوذ بی‌شمار هلو کیتی رقابت می‌کنند، کسی که نقش طلسم را برای همه چیز بازی می‌کرد، از کالاهای پرینگلز گرفته تا همکاری‌های کفش ورزشی.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "بیشتر بخوانید"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "زیبایی شبانه که در اینجا مشاهده می‌شود، روی صفحه‌های چرمی مشکی رویه و ساختار مشبک زبانه اعمال می‌شود، در حالی که تریم رویال و اسووشز جلوی پا جذابیت بیشتری برای پالت تیره ایجاد می‌کنند.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "بیشتر بخوانید"
    },
  ],
};


const footerAPI = {
  titles: [{ title: "About Nike" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "Nike Jouneral" },
      { link: "Send Us Feeback" },
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
