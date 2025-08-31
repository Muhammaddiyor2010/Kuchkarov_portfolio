<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-800 via-amber-900 to-yellow-900 relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          <span
            class="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"
          >Bog'lanish</span>
        </h1>
        <p
          class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-500"
        >Loyihangiz haqida gaplashishga tayyor. Keling, birgalikda ajoyib narsalar yaratalim!</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="animate-fade-in-left">
          <div class="space-y-8">
            <!-- Contact Cards -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Telegram</h3>
                  <p class="text-gray-300">@Dier_ai</p>
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Telefon</h3>
                  <p class="text-gray-300">+998 (93) 198-17-93</p>
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Manzil</h3>
                  <p class="text-gray-300">Farg'ona viloyati, Qo'qon</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 class="text-lg font-semibold text-white mb-4">Ijtimoiy tarmoqlar</h3>
              <div class="flex space-x-4">
                <!-- GitHub -->
                <a
                  href="https://github.com/Muhammaddiyor2010"
                  target="_blank"
                  class="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <!-- YouTube -->
                <a
                  href="https://www.youtube.com/@dier_creativeuz"
                  target="_blank"
                  class="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                </a>
                <!-- Instagram -->
                <a
                  href="https://www.instagram.com/dier_ai__?igsh=b3BjeGh3MGEyY3Br&utm_source=qr"
                  target="_blank"
                  class="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>
                <!-- Telegram -->
                <a
                  href="https://t.me/Dier_ai"
                  target="_blank"
                  class="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Availability -->
            <div
              class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30"
            >
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-green-300 font-medium">Hozir yangi loyihalar uchun ochiqman</span>
              </div>
              <p class="text-gray-300 mt-2 text-sm">Odatda 24 soat ichida javob beraman</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-fade-in-right">
          <form
            @submit.prevent="submitForm"
            class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h2 class="text-2xl font-bold text-white mb-6">Xabar yuborish</h2>

            <div class="space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">Ismingiz *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <!-- Telegram Username -->
              <div>
                <label
                  class="block text-gray-300 text-sm font-medium mb-2"
                >Telegram username (ixtiyoriy)</label>
                <input
                  v-model="form.telegram"
                  type="text"
                  class="w-full px-4 py-3 bg-gray-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  placeholder="@username yoki telefon raqam"
                />
              </div>

              <!-- Subject -->
              <div class="relative">
                <label class="block text-gray-300 text-sm font-medium mb-2">Mavzu</label>
                <select
                  v-model="form.subject"
                  class="w-full px-4 py-3 pr-10 bg-gray-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value class="bg-gray-800 text-gray-400">Mavzuni tanlang</option>
                  <option value="web-development" class="bg-gray-800 text-white">Web sayt yaratish</option>
                  <option value="bot-development" class="bg-gray-800 text-white">Bot yaratish</option>
                  <option value="consultation" class="bg-gray-800 text-white">Konsultatsiya</option>
                </select>
                <!-- Custom Arrow -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-7"
                >
                  <svg
                    class="w-5 h-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <!-- Budget -->
              <div class="relative">
                <label class="block text-gray-300 text-sm font-medium mb-2">Byudjet (ixtiyoriy)</label>
                <select
                  v-model="form.budget"
                  class="w-full px-4 py-3 pr-10 bg-gray-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value class="bg-gray-800 text-gray-400">Byudjetni tanlang</option>
                  <option value="200-300" class="bg-gray-800 text-white">$200 - $300</option>
                  <option value="300-500" class="bg-gray-800 text-white">$300 - $500</option>
                  <option value="500-800" class="bg-gray-800 text-white">$500 - $800</option>
                  <option value="800-1200" class="bg-gray-800 text-white">$800 - $1,200</option>
                  <option value="discuss" class="bg-gray-800 text-white">Muhokama qilamiz</option>
                </select>
                <!-- Custom Arrow -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-7"
                >
                  <svg
                    class="w-5 h-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-gray-300 text-sm font-medium mb-2">Xabar *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="Loyihangiz haqida batafsil yozing..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center">
                  Xabar yuborish
                  <svg
                    class="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
                <span v-else class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Yuborilmoqda...
                </span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
          >
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span
                class="text-green-300"
              >Telegram chat ochildi! Xabaringizni yuborish uchun "Send" tugmasini bosing.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        telegram: "",
        subject: "",
        budget: "",
        message: ""
      },
      isSubmitting: false,
      showSuccess: false,
      // Telegram konfiguratsiyasi - to'g'ridan-to'g'ri shaxsiy akkauntga
      telegramConfig: {
        chatId: "5797059138" // Sizning shaxsiy chat ID ingiz
      }
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;

      try {
        // Telegram xabar matnini tayyorlash
        const messageText = `🆕 Yangi xabar Portfolio saytidan!

👤 Mening ismim ${this.form.name}
${this.form.telegram ? `📱 Telegram: ${this.form.telegram}` : ""}
🎯 Men : ${this.form.subject || "Belgilanmagan"} loyiha qilmoqchiman 
💰 Byudjet: ${this.form.budget || "Belgilanmagan"}

💬 To'liq ma'lumotlar:
${this.form.message}

⏰ Vaqt: ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

        // Telegram orqali to'g'ridan-to'g'ri yuborish (tg:// protokol)
        const telegramLink = `https://t.me/Dier_ai?text=${encodeURIComponent(
          messageText
        )}`;

        // Yangi oynada Telegram chat ochish
        window.open(telegramLink, "_blank");

        this.isSubmitting = false;
        this.showSuccess = true;

        // Reset form
        this.form = {
          name: "",
          telegram: "",
          subject: "",
          budget: "",
          message: ""
        };

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);

        // Muvaffaqiyat xabari
        console.log("✅ Telegram chat ochildi!");
      } catch (error) {
        console.error("❌ Telegram xabar yuborishda xatolik:", error);
        this.isSubmitting = false;
        alert(
          `❌ Xabar yuborishda xatolik yuz berdi: ${error.message}\n\nIltimos qaytadan harakat qiling yoki to'g'ridan-to'g'ri Telegram orqali murojaat qiling: @Dier_ai`
        );
      }
    }
  }
};
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

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
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
