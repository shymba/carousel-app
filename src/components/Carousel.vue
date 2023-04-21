<template>
  <div class="wrapper">
    <div class="carousel" :style="{'margin-left': '-' + (100 * currentIdx) + '%'}">
      <CarouselItem
          v-for="(image, index) in apiListImages"
          :key="image.id"
          :itemData="image"
          @addURL="foo"
      />
    </div>
    <button
        class="carousel-button prev"
        @click="prevImage"
    >
      &#8656;
    </button>
    <button
        class="carousel-button next"
        @click="nextImage"
    >
      &#8658;
    </button>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem";
import CheckedList from "@/components/CheckedList";

export default {
  name: 'Carousel',
  components: {CarouselItem, CheckedList},
  props: {
    apiListImages: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      currentIdx: 0,
      newData: []
    }
  },
  methods: {
    prevImage() {
      if(this.currentIdx > 0) {
        this.currentIdx--
      }
    },
    nextImage() {
      this.currentIdx++
    },
    foo(e){
      this.newData.push(e)
      this.$emit('foo', this.newData)
    }
  },
}
</script>

<style lang="scss">
.wrapper {
  max-width: 500px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

.carousel {
  display: flex;
  transition: all ease .7s;
}

.carousel-button {
  position: absolute;
  z-index: 2;
  background: none;
  border: none;
  font-size: 2rem;
  top: 25%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, .5);
  background-color: rgba(0, 0, 0, .1);
  border-radius: 3px;
  padding: 0 0.5rem;
  cursor: pointer;
}
.carousel-button:hover,
.carousel-button:focus {
  color: white;
  background-color: rgba(0, 0, 0, .2);
}

.carousel-button:focus {
  outline: 1px solid black;
}

.carousel-button.prev {
  left: 1rem;
}

.carousel-button.next {
  right: 1rem;
}
@media (max-width: 500px) {
  .wrapper {
    width: 375px;
  }
}

</style>
