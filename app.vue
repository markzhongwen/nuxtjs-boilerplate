<template>
  <main class="min-h-screen p-4 bg-gray-100">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-center">
        Interpreter Booking for China
      </h1>

      <div class="bg-white rounded-xl shadow p-4 mb-4">
        <div class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Select Language</label>
            <input type="text" placeholder="e.g. English to Chinese" class="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Select City</label>
            <input type="text" placeholder="e.g. Shanghai, Beijing" class="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Date</label>
            <input type="date" class="w-full p-2 border border-gray-300 rounded" />
          </div>

          <button class="w-full px-4 py-2 bg-blue-600 text-white rounded">Search Interpreters</button>
        </div>
      </div>

      <div class="text-center text-sm text-gray-500">
        Built for users looking for interpreters in mainland China. Easy to use and mobile friendly.
      </div>
    </div>
  </main>
</template>

<script setup>
// 暂时无 JS 脚本
</script>

<style scoped>
/* 可选自定义样式 */
</style>
