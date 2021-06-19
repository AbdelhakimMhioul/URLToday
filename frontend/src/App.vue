<template>
  <div>
    <!-- NavBar -->
    <div class="bg-mauve p-6 text-center text-gray-700">
      <!-- Left Navbar -->
      <div><p href="#">Welcome To URLToday</p></div>
      <!-- End Left Navbar -->
    </div>
    <!-- End NavBar -->

    <!-- Body -->
    <div class="mx-40 mt-10 items-center">
      <url-form></url-form>
      <url-list></url-list>
    </div>
    <!-- End Body -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import UrlForm from "./components/UrlForm.vue";
  import UrlList from "./components/UrlList.vue";

  export default defineComponent({
    name: "App",
    components: { UrlForm, UrlList }
  });
</script>
