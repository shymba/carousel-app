<template>
  <div class="carousel-item">
    <div class="carousel-slide">
      <input
          type="checkbox"
          class="checkbox"
          :id="itemData.url"
          :value="itemData.url"
          v-model="checkedImage"
      />
      <label :for="itemData.url" >
        <img :src="itemData.download_url"/>
      </label>
    </div>
    <CheckedList :mainList="listOfChecked"/>
  </div>
</template>

<script>
import CheckedList from "@/components/CheckedList";

export default {
  name: "CarouselItem",
  components: {CheckedList},
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
    computed: {
      listOfChecked() {
        if(this.checkedImage) {
         this.mainList.push(this.checkedImage)
        }
        return this.mainList
      }
    }
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
  font-family: "Font Awesome 5 Free";
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