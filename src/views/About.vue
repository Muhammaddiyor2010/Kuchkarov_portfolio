<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-800 via-amber-900 to-yellow-900">
    <div class="container mx-auto px-4 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          <span class="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Men Haqimda
          </span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
          Texnologiyalarga muhabbat va innovatsion yechimlar yaratish ishtiyoqi
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Side - Image and Info -->
        <div class="animate-fade-in-left">
          <div class="relative">
            <!-- Profile Image -->
            <div class="relative mb-8">
              <div class="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1">
                <div class="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <svg class="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
              <div class="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 text-center">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div class="text-2xl font-bold text-white">6</div>
                <div class="text-gray-300 text-sm">Oylik Tajriba</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div class="text-2xl font-bold text-white">1</div>
                <div class="text-gray-300 text-sm">Loyiha</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div class="text-2xl font-bold text-white">100%</div>
                <div class="text-gray-300 text-sm">Motivatsiya</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - About Content -->
        <div class="animate-fade-in-right">
          <div class="space-y-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 class="text-xl font-semibold text-white mb-3">Mening Hikoyam</h3>
              <p class="text-gray-300 leading-relaxed">
                6 oylik tajriba bilan dasturlash sohasida o'z yo'limni boshlaganman. 
                Vue.js, JavaScript, TailwindCSS, HTML va CSS texnologiyalari bilan 
                1 ta muvaffaqiyatli loyiha yaratdim va yangi loyihalar uchun tayyorman.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 class="text-xl font-semibold text-white mb-3">Maqsadlarim</h3>
              <p class="text-gray-300 leading-relaxed">
                Har bir loyihada eng yaxshi natijaga erishish va mijozlarning 
                kutganidan ham ko'proq qiymat yaratish. Texnologiyalarni o'rganishda 
                doimo oldinda turish va yangi trendlarni kuzatib borish.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 class="text-xl font-semibold text-white mb-3">Qiziqishlar</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-amber-500/30 text-amber-200 rounded-full text-sm">🚀 Frontend</span>
                <span class="px-3 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-sm">💻 Backend</span>
                <span class="px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-sm">🌐 Web Development</span>
                <span class="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">🤖 Bot Development</span>
                <span class="px-3 py-1 bg-amber-600/30 text-amber-200 rounded-full text-sm">📚 O'qish</span>
                <span class="px-3 py-1 bg-yellow-600/30 text-yellow-200 rounded-full text-sm">🎯 Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Ko'nikmalarim</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p class="text-gray-300 text-sm mb-4">Zamonaviy frontend texnologiyalari</p>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">Vue.js</span>
                <span class="text-sm text-gray-300">90%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full" style="width: 90%"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">JavaScript</span>
                <span class="text-sm text-gray-300">88%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style="width: 88%"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">TailwindCSS</span>
                <span class="text-sm text-gray-300">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Backend</h3>
            <p class="text-gray-300 text-sm mb-4">Server va ma'lumotlar bazasi</p>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">Python</span>
                <span class="text-sm text-gray-300">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full" style="width: 85%"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">FastAPI</span>
                <span class="text-sm text-gray-300">80%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style="width: 80%"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">PostgreSQL</span>
                <span class="text-sm text-gray-300">78%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style="width: 78%"></div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Vositalar</h3>
            <p class="text-gray-300 text-sm mb-4">Development tools va platformalar</p>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">Git</span>
                <span class="text-sm text-gray-300">90%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full" style="width: 90%"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">GitHub</span>
                <span class="text-sm text-gray-300">88%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style="width: 88%"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-300">Vercel</span>
                <span class="text-sm text-gray-300">85%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <router-link to="/contact" 
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
                 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transform 
                 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <span>Loyiha boshlaylik</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
</style>
