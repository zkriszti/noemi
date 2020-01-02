<template>
  <div>
    <label class="control control-checkbox">
        {{labelText}}
        <input type="checkbox" :value="value" :name="itemName" @input="$emit('input', $event.target.checked)" />
        <div class="control_indicator">
          <font-awesome :icon="['fas', 'check']" size="1x" />
        </div>
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
  display: block
  position: relative
  padding-left: 30px
  margin-bottom: 5px
  padding-top: 3px
  cursor: pointer
  font-size: 16px

  input
    position: absolute
    z-index: -1
    opacity: 0

    &:focus ~ .control_indicator
      background: #cccccc

    &:checked ~ .control_indicator
      background: #2aa1c0

      &:after
        display: block

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