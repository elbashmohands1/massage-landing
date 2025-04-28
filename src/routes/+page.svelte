<script>
    import { fade, slide } from 'svelte/transition';
    import '../app.css';
  </script>
  
  <div class="bg-gray-900 text-gray-200 min-h-screen">
    <!-- Header -->
    <header class="bg-gradient-to-r from-gray-800 to-gray-700 py-12 relative overflow-hidden" style="background-image: url('/src/lib/assets/abstract-bg.svg'); background-size: cover;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 transition:fade class="text-3xl md:text-4xl font-bold text-purple-500">مركز [اسم المركز] للمساج العلاجي</h1>
        <p transition:fade={{ delay: 200 }} class="mt-2 text-lg">تجربة استرخاء فاخرة ومرخصة في [اسم المدينة]</p>
      </div>
    </header>
  
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Intro Section -->
      <section transition:slide class="bg-gray-800 rounded-lg shadow-xl p-8 mb-12 relative overflow-hidden" style="background-image: url('/src/lib/assets/abstract-bg.svg'); background-size: cover;">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2">
            <h2 class="text-2xl font-semibold text-purple-500 mb-4">لماذا تختار خدماتنا؟</h2>
            <p class="text-gray-300 mb-4">استمتع بجلسات مساج علاجي احترافية في مركز مرخص، مع فريق متخصص لتخفيف آلام العضلات والتوتر.</p>
            <ul class="list-disc list-inside text-gray-300">
              <li>أقسام منفصلة للرجال والنساء</li>
              <li>غرف مجهزة بأحدث المعدات</li>
              <li>مواعيد مرنة تناسبك</li>
            </ul>
          </div>
          <div class="md:w-1/2 mt-6 md:mt-0 md:mr-6">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="غرفة مساج علاجي" class="rounded-lg shadow-md w-full h-64 object-cover">
          </div>
        </div>
      </section>
  
      <!-- Gallery Section -->
      <section transition:slide class="bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
        <h2 class="text-2xl font-semibold text-purple-500 mb-6 text-center">معرض الصور</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {#each [
            { src: 'https://images.unsplash.com/photo-1584464491392-7c12371d86b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'جلسة مساج', caption: 'جلسة علاجية' },
            { src: 'https://images.unsplash.com/photo-1595502124338-950db57ea0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'غرفة مساج', caption: 'بيئة مريحة' },
            { src: 'https://images.unsplash.com/photo-1618215483362-81d26f4fdf7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'معدات مساج', caption: 'معدات حديثة' },
            { src: 'https://images.unsplash.com/photo-1600335893412-1e7f4689d2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'جو استرخاء', caption: 'أجواء فاخرة' }
          ] as image}
            <div class="relative group">
              <img src={image.src} alt={image.alt} class="rounded-lg w-full h-48 object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 rounded-lg flex items-center justify-center">
                <p class="text-white opacity-0 group-hover:opacity-100">{image.caption}</p>
              </div>
            </div>
          {/each}
        </div>
      </section>
  
      <!-- Booking Section -->
      <section transition:slide class="bg-gray-800 rounded-lg shadow-xl p-8 relative overflow-hidden" style="background-image: url('/src/lib/assets/abstract-bg.svg'); background-size: cover;">
        <h2 class="text-2xl font-semibold text-purple-500 mb-6 text-center">احجز موعدك الآن</h2>
        <p class="text-gray-300 mb-6 text-center">تواصل معنا لتحديد موعد جلسة المساج العلاجي المناسبة لك.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/+966XXXXXXXXX?text=مرحبا، أود حجز موعد لجلسة مساج علاجي" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300">حجز عبر واتساب</a>
          <a href="mailto:info@[اسم_موقعك].com?subject=حجز موعد مساج علاجي" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300">حجز عبر البريد الإلكتروني</a>
        </div>
      </section>
    </main>
  
    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© 2025 مركز [اسم المركز]. جميع الحقوق محفوظة.</p>
        <p class="mt-2">
          للتواصل: <a href="mailto:info@[اسم_موقعك].com" class="underline hover:text-purple-500">info@[اسم_موقعك].com</a> | 
          <a href="tel:+966XXXXXXXXX" class="underline hover:text-purple-500">+966XXXXXXXXX</a>
        </p>
        <p class="mt-2"><a href="/privacy-policy" class="underline hover:text-purple-500">سياسة الخصوصية</a></p>
      </div>
    </footer>
  </div>