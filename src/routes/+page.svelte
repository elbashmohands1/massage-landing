
<script>
  import { fade, slide } from "svelte/transition";
  import "../app.css";
  

</script>

<div class="bg-gray-900 text-gray-200 min-h-screen">
  <!-- Header -->
  <header
    class="bg-gradient-to-r from-gray-800 to-gray-700 py-12 relative overflow-hidden"
    style="background-image: url('/assets/abstract-bg.svg'); background-size: cover;"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6"
    >
      <div class="size-24 rounded-full overflow-hidden ">
        <img src="/assets/2.jpg" alt="مساج جدة" />
      </div>
      <h1
        transition:fade
        class="text-4xl md:text-6xl font-bold text-purple-500"
      >
        مساج علاجي جدة
      </h1>
      <p transition:fade={{ delay: 200 }} class="mt-2 text-lg">
        تجربة استرخاء فاخرة ومرخصة في مدينة جدة
      </p>
      <div class="mt-6 flex flex-col gap-4 md:flex-row">
        <a
        onclick={handlewhatsapp}
        href="https://wa.me/+966592625043?text=مرحبا، أود حجز موعد لجلسة مساج علاجي"
        >
        <div         class=" flex  items-center justify-between bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition duration-300"
        >
          <img src="assets/icons8-whatsapp.svg" alt="whatsapp"><p>          حجز عبر واتساب </p>
        </div>

        </a >

        <a
        href="tel:+966592625043"
        >
        <div        
        class="flex items-center justify-between bg-sky-600 hover:bg-sky-700  text-white font-semibold  py-4 px-6 rounded-lg text-center transition duration-300"
        >
          <img src="assets/phone-svgrepo-com.svg " alt="whatsapp" class="size-8 "><p class="text-xl">       0592625043</p>
        </div>

        </a >
     
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Intro Section -->
    <section
      transition:slide
      class="bg-gray-800 rounded-lg shadow-xl p-8 mb-12 relative overflow-hidden"
      style="background-image: url('/src/lib/assets/abstract-bg.svg'); background-size: cover;"
    >
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2">
          <h2 class="text-2xl font-semibold text-purple-500 mb-4">
            لماذا تختار خدماتنا؟
          </h2>
          <p class="text-gray-300 mb-4">
            استمتع بجلسات مساج علاجي احترافية في مركز مرخص، مع فريق متخصص لتخفيف
            آلام العضلات والتوتر.
          </p>
          <ul class="list-disc list-inside text-gray-300">
            <li>أقسام منفصلة للرجال والنساء</li>
            <li>غرف مجهزة بأحدث المعدات</li>
            <li>مواعيد مرنة تناسبك</li>
          </ul>
        </div>
        <div class="md:w-1/2 mt-6 md:mt-0 md:mr-6">
          <img
            src="/assets/7.jpg"
            alt="غرفة مساج علاجي"
            class="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section
      transition:slide
      class="bg-gray-800 rounded-lg shadow-xl p-8 mb-12"
    >
      <h2 class="text-2xl font-semibold text-purple-500 mb-6 text-center">
        ما يميزنا
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each [{ src: "/assets/3.jpg", alt: "جلسة مساج", caption: "جلسة علاجية" },
         { src: "/assets/4.jpg", alt: "غرفة مساج", caption: "خدمة التدليك" }, 
         { src: "/assets/6.jpg", alt: "معدات مساج", caption: "معدات حديثة" },
          { src: "/assets/1.jpg", alt: "جو استرخاء", caption: "أجواء فاخرة" }] as image}
          <div class="relative group">
            <img
              src={image.src}
              alt={image.alt}
              class="rounded-lg w-full h-48 object-cover"
            />
            <div
              class="absolute inset-0 hover:bg-black/10 bg-opacity group-hover:bg-opacity-40 transition duration-300 rounded-lg flex items-center justify-center"
            >
              <p class="text-white opacity-75 hover:opacity-70 group-hover:opacity-100 bg-black w-full text-center py-2">
                {image.caption}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Booking Section -->
    <section
      transition:slide
      class="bg-gray-800 rounded-lg shadow-xl p-8 relative overflow-hidden"
      style="background-image: url('/src/lib/assets/abstract-bg.svg'); background-size: cover;"
    >
      <h2 class="text-2xl font-semibold text-purple-500 mb-6 text-center">
        احجز موعدك الآن
      </h2>
      <p class="text-gray-300 mb-6 text-center">
        تواصل معنا لتحديد موعد جلسة المساج العلاجي المناسبة لك.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://wa.me/+966592625043?text=مرحبا، أود حجز موعد لجلسة مساج علاجي"
          class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300"
          >حجز عبر واتساب</a
        >
        <a
          href="tel:+966592625043"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300"
          >اتصل بنا </a
        >
       
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-300 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>© 2025 مساج علاجي جدة . جميع الحقوق محفوظة.</p>
      <p class="mt-2">
        للتواصل: <a
          href="mailto:info@[اسم_موقعك].com"
          class="underline hover:text-purple-500">info@massagejeddah.com</a
        >
        |
        <a href="tel:+966592625043" class="underline hover:text-purple-500"
          >0592625043</a
        >
      </p>
      <p class="mt-2">
        <a href="/privacy-policy" class="underline hover:text-purple-500"
          >سياسة الخصوصية</a
        >
      </p>
    </div>
  </footer>
</div>
