<template>
    <div>
        <ImageCompare  :BeforeImage= "BeforeImage"  :AfterImage= "AfterImage"/>
    </div>
</template>

<script>
import ImageCompare from '@/components/image-compare.vue'

export default {
    name: "boxTwo",
    props: {
    msg: String,
  },

    components: {
    ImageCompare,
  },

  data() {
    return {
      BeforeImage: require('../assets/images/frame-before.webp'),
      AfterImage: require('../assets/images/frame-after.webp'),
    }
  },
    

}
</script>

<style scoped>

</style>