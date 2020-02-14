<template>
  <div class="demo">
    <mz-slides :selected.sync="selected" width="300px" height="200px" :autoPlay="true">
      <MzSlidesItem name="0">
        <div class="box">1</div>
      </MzSlidesItem>
      <MzSlidesItem name="1">
        <div class="box">2</div>
      </MzSlidesItem>
      <MzSlidesItem name="2">
        <div class="box">3</div>
      </MzSlidesItem>
      <MzSlidesItem name="3">
        <div class="box">4</div>
      </MzSlidesItem>
    </mz-slides>
  </div>
</template>
<script>
  import MzSlides from '../src/slides/slides'
  import MzSlidesItem from '../src/slides/slides-item'
  import MzButton from './button/button'
  export default {
    name: 'demo',
    components: {
      MzSlides,
      MzSlidesItem,
      MzButton
    },
    data() {
      return {
        selected: '2'
      }
    }
  }
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .demo {
    // min-height: 100vh;
    padding: 100px;

    .box {
      width: 100%;
      height: 350px;
      background: #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
    }
  }
</style>
