<template>
  <div>
    <label class="control control-checkbox">
        <input type="checkbox" :value="value" :name="itemName" @input="$emit('input', $event.target.checked)" />
        <span class="control_indicator">
          <font-awesome :icon="['fas', 'check']" size="1x" v-if="value" :style="{ color: '#eee' }" />
        </span>
        {{labelText}}
    </label>
  </div>
</template>

<script>
export default {

  props: {
    labelText: {
      type: String,
      default: 'This is a checkbox.'
    },

    value: {
      type: Boolean
    },

    itemName: {
      required: true,
      type: String
    }
  }

}
</script>

<style lang="stylus" scoped>
.control
  display: grid
  grid-template-columns: 20px auto
  grid-gap: 12px
  position: relative
  margin-bottom: 5px
  padding-top: 3px
  cursor: pointer
  font-size: 16px

  .control_indicator
    background: #cccccc
    width: 20px
    height: 20px
    display: inline-flex
    justify-content: center
    align-items: center
    border-radius: 3px

  input
    position: absolute
    z-index: -1
    opacity: 0
    margin: 0

    &:checked ~ .control_indicator
      background: #40b9a9

@keyframes s-ripple {
    0% {
        transform: scale(0)
    }
    20% {
        transform: scale(1)
    }
    100% {
        opacity: 0
        transform: scale(1)
    }
}
@keyframes s-ripple-dup {
   0% {
       transform: scale(0)
    }
   30% {
        transform: scale(1)
    }
    60% {
        transform: scale(1)
    }
    100% {
        opacity: 0
        transform: scale(1)
    }
}
.control-checkbox input + .control_indicator::before
  animation: s-ripple 250ms ease-out

.control-checkbox input:checked + .control_indicator::before
  animation-name: s-ripple-dup

</style>