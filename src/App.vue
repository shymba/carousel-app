<template>
  <Carousel :apiListImages="listImages" />
</template>

<script>
import Carousel from './components/Carousel.vue';
import ApiService from "@/modules/apiService";

const apiListImg = new ApiService();

export default {
  name: 'App',
  components: {
    Carousel,
  },
  data() {
    return {
      listImages: [],
    }
  },
  methods: {
    async getListAllImg() {
      this.listImages = await apiListImg.getListImg()
    },
  },
  async mounted() {
    await this.getListAllImg()
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgba(0, 0, 0, .8);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
