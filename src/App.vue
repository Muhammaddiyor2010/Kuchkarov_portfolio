<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-2 group">
            <div class="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-sm">M</span>
            </div>
            <span class="text-white font-bold text-lg">Portfolio</span>
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path"
              class="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              :class="{ 'text-white': $route.path === link.path }">
              {{ link.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:w-full transition-all duration-300"
                    :class="{ 'w-full': $route.path === link.path }"></span>
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-white p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 space-y-2">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            :class="{ 'text-white bg-white/10': $route.path === link.path }">
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <router-view v-slot="{ Component, route }">
        <transition 
          :name="route.meta.transition || 'fade'"
          mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Scroll to Top Button -->
    <button 
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 
             text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 
             transition-all duration-300 z-40">
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>

    <!-- Loading Screen -->
    <div v-if="isLoading" class="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div class="text-white text-xl font-semibold">Yuklanmoqda...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
      showScrollTop: false,
      isLoading: true,
      navLinks: [
        { name: 'Bosh sahifa', path: '/' },
        { name: 'Men haqimda', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Bog\'lanish', path: '/contact' }
      ]
    }
  },
  mounted() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
      this.isLoading = false
    }, 2000)

    // Scroll top button logic
    window.addEventListener('scroll', this.handleScroll)
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', this.closeMobileMenu)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.closeMobileMenu)
  },
  methods: {
    handleScroll() {
      this.showScrollTop = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    closeMobileMenu(event) {
      if (!event.target.closest('nav')) {
        this.mobileMenuOpen = false
      }
    }
  },
  watch: {
    $route() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style>
/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #a855f7, #3b82f6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #9333ea, #2563eb);
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

/* Selection */
::selection {
  background: rgba(168, 85, 247, 0.3);
  color: white;
}

/* Focus styles */
*:focus {
  outline: 2px solid #a855f7;
  outline-offset: 2px;
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
