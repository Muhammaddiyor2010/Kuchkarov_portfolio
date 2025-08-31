<template>
  <div class="max-h-[630px] bg-gradient-to-br from-gray-800 via-amber-900 to-yellow-900 relative overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div class="text-center">
        <!-- Profile Image -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <div class="w-[200px] h-[200px] bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full p-2 animate-pulse">
              <div class="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                <svg class="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full border-8 border-gray-900 animate-pulse"></div>
          </div>
        </div>

        <!-- Name and Title -->
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          <span class="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Muhammaddiyor
          </span>
        </h1>
        
        <div class="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-500">
          <span class="typewriter">
            Frontend & Backend Developer
          </span>
        </div>

        <!-- Description -->
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-1000">
          Men Vue.js, JavaScript, TailwindCSS, HTML va CSS bilan ishlashni yaxshi ko'raman. 
          Frontend va Backend dasturlash sohasida tajribaga egaman.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1500">
          <router-link to="/portfolio" 
            class="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full 
                   hover:from-amber-700 hover:to-yellow-700 transform hover:scale-105 transition-all 
                   duration-300 shadow-lg hover:shadow-xl">
            Ishlarimni ko'rish
          </router-link>
          <router-link to="/contact" 
            class="px-8 py-4 border-2 border-amber-500 text-amber-300 rounded-full 
                   hover:bg-amber-500 hover:text-white transform hover:scale-105 
                   transition-all duration-300">
            Bog'lanish
          </router-link>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mt-12 animate-fade-in-up animation-delay-2000">
          <!-- GitHub -->
          <a href="https://github.com/Muhammaddiyor2010" target="_blank" class="text-gray-400 hover:text-amber-400 transform hover:scale-125 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <!-- YouTube -->
          <a href="https://www.youtube.com/@dier_creativeuz" target="_blank" class="text-gray-400 hover:text-amber-400 transform hover:scale-125 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="https://www.instagram.com/dier_ai__?igsh=b3BjeGh3MGEyY3Br&utm_source=qr" target="_blank" class="text-gray-400 hover:text-amber-400 transform hover:scale-125 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <!-- Telegram -->
          <a href="https://t.me/Dier_ai" target="_blank" class="text-gray-400 hover:text-amber-400 transform hover:scale-125 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 14-7 7m0 0-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // Typewriter effect
    this.typewriter()
  },
  methods: {
    typewriter() {
      const text = 'Frontend & Backend Developer'
      const element = document.querySelector('.typewriter')
      if (!element) return
      
      element.innerHTML = ''
      let i = 0
      
      const timer = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i)
          i++
        } else {
          clearInterval(timer)
        }
      }, 100)
    }
  }
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
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

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

  .typewriter {
    border-right: 2px solid #f59e0b;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { border-color: #f59e0b; }
    51%, 100% { border-color: transparent; }
  }
</style>
