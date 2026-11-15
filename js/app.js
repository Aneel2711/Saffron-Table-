// Saffron Table — language, mobile navigation, and demo reservation form.
const translations = {
  en: {
    navHome:"Home", navAbout:"About", navMenu:"Our Menu", navReservation:"Reservation", navContact:"Contact",
    bookTable:"Book a Table", heroEyebrow:"WELCOME TO SAFFRON TABLE", heroTitle:"A Taste of Elegance, A World of Flavor.",
    heroCopy:"Discover exceptional cuisine, carefully selected ingredients, and unforgettable dining experiences made with passion.",
    exploreMenu:"Explore Menu", reserveTable:"Reserve Your Table", ourStory:"OUR STORY", aboutTitle:"More Than Just a Restaurant",
    aboutCopy:"At Saffron Table, we believe great food brings people together. Our chefs combine traditional inspiration with modern creativity to create dishes worth remembering.",
    aboutCopyTwo:"Every detail matters, from the freshest ingredients to our welcoming atmosphere.", visitUs:"Visit Us",
    specialties:"OUR SPECIALTIES", menuTitle:"Discover Our Menu", menuIntro:"Fresh ingredients, authentic flavors, and beautifully prepared dishes.",
    dishSalad:"Garden Fresh Salad", descSalad:"Fresh greens, cherry tomatoes, avocado and house dressing.",
    dishSteak:"Premium Grilled Steak", descSteak:"Tender grilled steak served with seasonal vegetables.",
    dishPasta:"Creamy Italian Pasta", descPasta:"Homemade pasta with creamy sauce and fresh herbs.",
    dishBurger:"Signature Beef Burger", descBurger:"Juicy beef, melted cheese and our signature sauce.",
    dishCake:"Chocolate Dream Cake", descCake:"Rich chocolate cake with smooth chocolate cream.",
    dishMocktail:"Fresh Fruit Mocktail", descMocktail:"Refreshing fruit blend made with fresh seasonal ingredients.",
    chefPick:"CHEF'S RECOMMENDATION", specialTitle:"Made With Passion, Served With Love.",
    specialCopy:"Experience our chef's carefully crafted specialties, where premium ingredients meet unforgettable flavors.",
    bookExperience:"Book Your Experience", bookEyebrow:"BOOK A TABLE", reservationTitle:"Make a Reservation",
    reservationIntro:"Join us for a memorable dining experience. Reserve your table today.", fullName:"Full Name",
    email:"Email Address", phone:"Phone Number", guests:"Number of Guests", date:"Reservation Date", time:"Reservation Time",
    confirmBooking:"Send Reservation Request", demoNote:"Demo form: requests are saved only in this browser and are not sent to the restaurant.",
    getInTouch:"GET IN TOUCH", contactTitle:"We'd Love to See You", location:"Our Location", callUs:"Call Us",
    openingHours:"Opening Hours", hoursText:"Monday – Sunday<br>12:00 PM – 10:00 PM", footerCopy:"Exceptional food, warm hospitality, and unforgettable memories.",
    quickLinks:"Quick Links", followUs:"Follow Us", rights:"All rights reserved.",
    required:"Please complete all required fields.", invalidDate:"Please choose today or a future date.",
    saved:"Your demo reservation has been saved in this browser. The restaurant has not been notified."
  },
  ar: {
    navHome:"الرئيسية", navAbout:"من نحن", navMenu:"قائمتنا", navReservation:"الحجز", navContact:"اتصل بنا",
    bookTable:"احجز طاولة", heroEyebrow:"مرحباً بكم في سافرون تيبل", heroTitle:"مذاق الأناقة وعالم من النكهات.",
    heroCopy:"اكتشف أشهى المأكولات والمكونات المختارة بعناية وتجارب طعام لا تُنسى.",
    exploreMenu:"اكتشف القائمة", reserveTable:"احجز طاولتك", ourStory:"قصتنا", aboutTitle:"أكثر من مجرد مطعم",
    aboutCopy:"في سافرون تيبل نؤمن بأن الطعام الرائع يجمع الناس. يجمع طهاتنا بين الإلهام التقليدي والإبداع الحديث لتقديم أطباق لا تُنسى.",
    aboutCopyTwo:"كل التفاصيل مهمة، من المكونات الطازجة إلى أجوائنا الترحيبية.", visitUs:"زرنا",
    specialties:"أطباقنا المميزة", menuTitle:"اكتشف قائمتنا", menuIntro:"مكونات طازجة ونكهات أصيلة وأطباق محضرة بعناية.",
    dishSalad:"سلطة الحديقة الطازجة", descSalad:"خضروات طازجة وطماطم كرزية وأفوكادو وصلصة خاصة.",
    dishSteak:"شريحة لحم مشوية فاخرة", descSteak:"شريحة لحم طرية مشوية مع خضروات موسمية.",
    dishPasta:"المعكرونة الإيطالية الكريمية", descPasta:"معكرونة منزلية مع صلصة كريمية وأعشاب طازجة.",
    dishBurger:"برجر اللحم المميز", descBurger:"لحم بقري شهي وجبن ذائب وصلصتنا المميزة.",
    dishCake:"كيكة أحلام الشوكولاتة", descCake:"كيكة شوكولاتة غنية مع كريمة شوكولاتة ناعمة.",
    dishMocktail:"كوكتيل الفواكه الطازجة", descMocktail:"مزيج منعش من الفواكه الموسمية الطازجة.",
    chefPick:"اختيار الشيف", specialTitle:"يُحضّر بشغف ويُقدّم بمحبة.",
    specialCopy:"استمتع بأطباق الشيف المعدة بعناية حيث تلتقي المكونات الفاخرة بالنكهات التي لا تُنسى.",
    bookExperience:"احجز تجربتك", bookEyebrow:"احجز طاولة", reservationTitle:"قم بالحجز",
    reservationIntro:"انضم إلينا لتجربة طعام مميزة. احجز طاولتك اليوم.", fullName:"الاسم الكامل",
    email:"البريد الإلكتروني", phone:"رقم الهاتف", guests:"عدد الضيوف", date:"تاريخ الحجز", time:"وقت الحجز",
    confirmBooking:"إرسال طلب الحجز", demoNote:"نموذج تجريبي: يتم حفظ الطلبات في هذا المتصفح فقط ولا يتم إرسالها إلى المطعم.",
    getInTouch:"تواصل معنا", contactTitle:"يسعدنا استقبالكم", location:"موقعنا", callUs:"اتصل بنا",
    openingHours:"ساعات العمل", hoursText:"من الاثنين إلى الأحد<br>12:00 ظهراً – 10:00 مساءً", footerCopy:"طعام استثنائي وضيافة دافئة وذكريات لا تُنسى.",
    quickLinks:"روابط سريعة", followUs:"تابعنا", rights:"جميع الحقوق محفوظة.",
    required:"يرجى إكمال جميع الحقول المطلوبة.", invalidDate:"يرجى اختيار تاريخ اليوم أو تاريخ لاحق.",
    saved:"تم حفظ طلب الحجز التجريبي في هذا المتصفح. لم يتم إشعار المطعم."
  }
};

let currentLanguage = "en";
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const bookingDate = document.getElementById("bookingDate");
const bookingMessage = document.getElementById("bookingMessage");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });

  languageToggle.textContent = language === "en" ? "العربية" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
  localStorage.setItem("saffronLanguage", language);
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Set the date input's minimum to the user's local calendar date.
function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
bookingDate.min = localDateString();

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!bookingForm.reportValidity()) {
    bookingMessage.textContent = translations[currentLanguage].required;
    return;
  }

  if (bookingDate.value < localDateString()) {
    bookingMessage.textContent = translations[currentLanguage].invalidDate;
    return;
  }

  const formData = new FormData(bookingForm);
  const reservation = {
    name: String(formData.get("name")).trim(),
    email: String(formData.get("email")).trim(),
    phone: String(formData.get("phone")).trim(),
    guests: formData.get("guests"),
    date: formData.get("date"),
    time: formData.get("time"),
    createdAt: new Date().toISOString()
  };

  try {
    const savedReservations = JSON.parse(localStorage.getItem("saffronReservations") || "[]");
    savedReservations.push(reservation);
    localStorage.setItem("saffronReservations", JSON.stringify(savedReservations));
    bookingMessage.textContent = translations[currentLanguage].saved;
    bookingForm.reset();
    bookingDate.min = localDateString();
  } catch (error) {
    bookingMessage.textContent = "Could not save this demo request in this browser.";
    console.error("Reservation storage error:", error);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("saffronLanguage") === "ar" ? "ar" : "en");
