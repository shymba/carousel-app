<template>
  <Carousel :apiListImages="listImages" @foo="foo" @nextPage="getNextPage"/>
  <CheckedList :mainList="imgURLs"/>
</template>

<script>
import Carousel from './components/Carousel.vue';
import ApiService from "@/modules/apiService";
import CheckedList from "@/components/CheckedList";

const apiListImg = new ApiService();

export default {
  name: 'App',
  components: {
    CheckedList,
    Carousel,
  },
  data() {
    return {
      listImages: [],
      imgURLs: [],
      nextPage: []
    }
  },
  methods: {
    async getListAllImg(page) {
      this.listImages = await apiListImg.getListImg(page)
    },
    async getNextPage(next) {
      this.nextPage = await apiListImg.getListImg(next)
      this.listImages = [...this.listImages, ...this.nextPage]
    },
    foo(arg) {
      this.imgURLs = arg
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
