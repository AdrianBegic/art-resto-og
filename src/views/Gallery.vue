<template>
  <div class="content">
    <ImageCompare BeforeImage="https://static.wixstatic.com/media/b85bb1_737f4e34b9424f43916c72749de69f75~mv2.jpg/v1/fill/w_1005,h_754,al_c,q_85,usm_0.66_1.00_0.01/b85bb1_737f4e34b9424f43916c72749de69f75~mv2.webp" AfterImage="https://static.wixstatic.com/media/b85bb1_9e29b411829c489991442cf5f4e9ba00~mv2.jpg/v1/fill/w_1005,h_754,al_c,q_85,usm_0.66_1.00_0.01/b85bb1_9e29b411829c489991442cf5f4e9ba00~mv2.webp" />
   
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCompare from '@/components/image-compare.vue'

export default {
  name: 'Gallery',
  components: {
    ImageCompare
  },

 




};
</script>

<style scoped>
.content {
  margin: 0 auto;
  width: 50%;
}
</style>
