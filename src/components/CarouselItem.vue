<template>
  <div class="carousel-item">
    <div class="carousel-slide">
      <input
          type="checkbox"
          class="checkbox"
          :id="itemData.url"
          :value="itemData.url"
          v-model="checkedImage"
          @click="sendURL(itemData)"
      />
      <label :for="itemData.url" >
        <img :src="itemData.download_url"/>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: "CarouselItem",
  props: {
    itemData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      checkedImage: [],
      mainList: [],
    }
  },
  methods: {
    sendURL(e) {
      this.$emit('addURL', e)
    }
  },
}
</script>

<style lang="scss">
img {
  max-width: 500px;
  border-radius: 4px;
  position: relative;
}

input[type="checkbox"]{
  -webkit-appearance: none;
  position: relative;
  width: 100%;
  cursor: pointer;
}

input[type="checkbox"]:after {
  position: absolute;
  color: yellow;
  z-index: 4;
  font-family: "Font Awesome 5 Free", serif;
  font-weight: 400;
  font-size: 1em;
  content: "\f111";
  right: 10px;
  top: 10px;
}

input[type="checkbox"]:checked:after {
  font-weight: 900;
  content: "\f058";
  color: yellow;
}
@media (max-width: 500px) {
  img {
    width: 375px;
  }
}

</style>