<template>
  <div>
    <mz-button>默认按钮</mz-button>
    <mz-button icon="setting">默认按钮</mz-button>
    <mz-button loading>默认按钮</mz-button>
    <mz-button disabled>默认按钮</mz-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'mz-button': Button
    },
    data() {
      return {
        content: `<mz-button>默认按钮</mz-button>
        <mz-button icon="setting">默认按钮</mz-button>
        <mz-button loading>默认按钮</mz-button>
        <mz-button disabled>默认按钮</mz-button>`.replace(/\t+| +/g, ''),
      }
    }
  }
</script>
