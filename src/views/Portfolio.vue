<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-800 via-amber-900 to-yellow-900">
    <div class="container mx-auto px-4 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          <span class="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Mening Ishlarim
          </span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
          Yaratilgan loyihalar va ular orqali erishilgan natijalar
        </p>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up animation-delay-1000">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="{
              'bg-gradient-to-r from-amber-600 to-yellow-600 text-white': selectedCategory === category,
              'bg-white/10 text-gray-300 hover:bg-white/20': selectedCategory !== category
            }"
            class="px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 
                 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                 animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }">
          
          <!-- Project Image -->
          <div class="relative overflow-hidden h-48 bg-gradient-to-br from-amber-500 to-yellow-500">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-6xl text-white/30">{{ project.icon }}</div>
            </div>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div class="flex space-x-4">
                <button 
                  @click="viewProject(project)"
                  class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
                <button 
                  v-if="project.links?.live"
                  @click="openLink(project.links.live)"
                  class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-green-500/80 text-white text-xs rounded-full">{{ project.status }}</span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
              <span class="text-sm text-gray-400">{{ project.year }}</span>
            </div>
            
            <p class="text-gray-300 text-sm mb-4 line-clamp-3">{{ project.description }}</p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded">
                {{ tech }}
              </span>
            </div>

            <!-- Project Stats -->
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="text-center">
                <div class="text-lg font-bold text-white">{{ project.stats.duration }}</div>
                <div class="text-xs text-gray-400">Davomiyligi</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-white">{{ project.stats.team }}</div>
                <div class="text-xs text-gray-400">Jamoa</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-white">{{ project.stats.rating }}</div>
                <div class="text-xs text-gray-400">Reyting</div>
              </div>
            </div>

            <!-- Links -->
            <div class="flex justify-between items-center">
              <button 
                @click="viewProject(project)"
                class="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-300">
                Batafsil →
              </button>
              <div class="flex space-x-2">
                <button class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
                <button class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Note about more projects -->
      <div class="text-center mt-12">
        <p class="text-gray-400 text-lg">
          Tez orada yangi loyihalar qo'shiladi...
        </p>
      </div>

      <!-- Contact CTA -->
      <div class="text-center mt-20 animate-fade-in-up">
        <div class="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 class="text-3xl font-bold text-white mb-4">Loyiha g'oyangiz bormi?</h2>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            Keling, birgalikda ajoyib loyiha yarataylik. Men sizning g'oyalaringizni 
            real mahsulotga aylantirishga yordam beraman.
          </p>
          <router-link to="/contact" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 
                   text-white rounded-full hover:from-amber-600 hover:to-yellow-600 transform 
                   hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Loyiha boshlash</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      selectedCategory: 'Hammasi',
      categories: ['Hammasi', 'Web Apps', 'Mobile Apps', 'E-commerce', 'Landing Pages'],
      visibleProjects: 6,
      projects: [
        {
          id: 1,
          title: 'IELTS Hub',
          description: 'IELTS imtihoniga tayyorgarlik uchun to\'liq web platformasi. Reading, Writing, Listening va Speaking bo\'limlari, mock testlar va real-time natijalar.',
          category: 'Web Apps',
          technologies: ['Vue.js', 'JavaScript', 'TailwindCSS', 'Python'],
          year: '2024',
          status: 'Davom etmoqda',
          icon: '📚',
          stats: {
            duration: '4+ oy',
            team: '1 kishi',
            rating: '4.8★'
          },
          links: {
            live: 'https://ielts-hub-self.vercel.app/',
            github: '#'
          }
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      const filtered = this.selectedCategory === 'Hammasi' 
        ? this.projects 
        : this.projects.filter(project => project.category === this.selectedCategory)
      
      return filtered.slice(0, this.visibleProjects)
    },
    hasMoreProjects() {
      const filtered = this.selectedCategory === 'Hammasi' 
        ? this.projects 
        : this.projects.filter(project => project.category === this.selectedCategory)
      
      return this.visibleProjects < filtered.length
    }
  },
  methods: {
    loadMore() {
      this.visibleProjects += 3
    },
    openLink(url) {
      window.open(url, '_blank')
    },
    viewProject(project) {
      if (project.links?.live) {
        this.openLink(project.links.live)
      } else {
        // Show project details modal or navigate to project detail page
        alert(`${project.title} loyihasi haqida batafsil ma'lumot`)
      }
    }
  },
  watch: {
    selectedCategory() {
      this.visibleProjects = 6
    }
  }
}
</script>

<style scoped>
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
