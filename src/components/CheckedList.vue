<template>
  <div>
    <ul v-for="li in mainList">
      <li class="li-item" v-if="li.length > 0">URL: {{li[0]}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "CheckedList",
  props: {
    mainList: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss">
.li-item {
  color: yellow;
}
ul li {
  list-style: none;
}
@media (max-width: 950px) {
  .li-item {
    font-size: 14px;
  }
}

</style>