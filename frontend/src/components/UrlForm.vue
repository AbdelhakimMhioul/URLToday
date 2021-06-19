<template>
  <div class="bg-powderblue px-4 py-6 text-gray-600 text-center">
    <label for="url" class="mr-8">Enter your URL</label>
    <input
      type="text"
      v-model="url_full"
      class="h-8 p-4 rounded-2xl border-saphire border-2 outline-none"
      id="url"
      @keypress.enter="post_url"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useStore } from "vuex";

  export default defineComponent({
    name: "UrlForm",
    components: {},
    setup() {
      const url_full = ref("");
      const store = useStore();

      const post_url = () => {
        store.dispatch("post_url", url_full.value);
        url_full.value = "";
      };

      return { url_full, post_url };
    },
  });
</script>
