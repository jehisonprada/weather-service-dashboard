<template>
  <div class="card-container" :style="cardContainerStyle">
    <slot v-if="title" name="card-header">
      <div class="card-header-container">
        <h3>{{title}}</h3>
      </div>
    </slot>
    <div class="card-body-container">
      <slot></slot>
    </div>
    <slot name="card-footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
    },
    cardWidth: {
      type: Number,
      default: 420
    },
    cardHeight: {
      type: Number,
      default: 420
    }
  },
  data() {
    return {
      cardContainerStyle: {
        width: this.cardWidth + 'px',
        height: this.cardHeight + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-container {
  padding: 20px 10px;
  box-shadow: $card-shadow $card-shadow-color;
  transition: 0.3s;
  
  &:hover {
    box-shadow: $card-shadow-on-hover $card-shadow-color;
  }
  
  display: flex;
  flex-direction: column;
}

.card-body-container {
  padding: $card-body-padding;
  flex-grow: 6;
}
</style>
