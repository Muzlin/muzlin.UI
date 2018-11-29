<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" :readonly="readonly" class="mz-icon" type="text"
      @change="$emit('change')"
    >
    <template v-if="error">
      <icon name="success" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from "./icon"
  export default {
    name: "mz-input",
    components: {
      Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $error-color: #f1435d;

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > * {
      &:not(:last-child){
        margin-right: .3em;
      }
    }

    >input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border: 1px solid $border-color-hover;
      }

      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }

      &[disabled],
      &[readonly] {
        border: 1px solid #aaa;
        color: #aaa;
        cursor: not-allowed;
      }
    }

    &.error {
      >input {
        border: 1px solid $error-color;
      }
    }

    .icon-error {
      fill: $error-color;
    }

    .errorMessage {
      color: $error-color;
    }
  }
</style>
