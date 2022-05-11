<template>
  <div class="res-reservation-container">
     {{$route.params.resType}}
     <meeting-list></meeting-list>
  </div>
</template>

<script>
import MeetingList from '@/components/MeetingList.vue'
export default {
  components: { MeetingList },
  name: 'ResReservation',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
