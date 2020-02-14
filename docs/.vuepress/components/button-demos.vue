<template>
  <div>
    <m-button>默认按钮</m-button>
    <m-button icon="setting">默认按钮</m-button>
    <m-button loading>默认按钮</m-button>
    <m-button disabled>默认按钮</m-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'
  export default {
    components: {
      'm-button': Button
    },
    data() {
      return {
        content: `<m-button>默认按钮</m-button>
        <m-button icon="setting">默认按钮</m-button>
        <m-button loading>默认按钮</m-button>
        <m-button disabled>默认按钮</m-button>`.replace(/\t+| +/g, ''),
      }
    }
  }
</script>
