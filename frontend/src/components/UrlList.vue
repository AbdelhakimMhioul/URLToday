<template>
  <div class="bg-lightpeach">
    <table class="table-auto mx-4" v-if="urls.length">
      <thead>
        <tr class="text-gray-800">
          <th class="w-1/2">Full Url</th>
          <th class="w-1/4">Short Url</th>
          <th class="w-1/4">Clicks</th>
          <th class="w-1/4">Delete</th>
        </tr>
      </thead>
      <tbody class="text-center mb-4">
        <tr v-for="url in urls" :key="url._id">
          <td>{{ url.full }}</td>
          <td>{{ url.short }}</td>
          <td>{{ url.clicks }}</td>
          <td>
            <button
              class="
                bg-mauve
                text-white
                hover:opacity-80
                p-3
                rounded-3xl
                focus:outline-none
              "
              @click="delete_url(url._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from "vue";
  import { useStore } from "vuex";

  export default defineComponent({
    name: "UrlList",
    components: {},
    setup() {
      const store = useStore();

      onMounted(() => {
        store.dispatch("get_urls");
      });

      const delete_url = (id: number) => {
        store.dispatch("delete_url", id);
      };

      return { urls: computed(() => store.state.urls), delete_url };
    },
  });
</script>
