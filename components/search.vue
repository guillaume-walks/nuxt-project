<template>
  <div class="major">
    <div class="inner">
      <form>
        <div class="row gtr-uniform">
          <div class="col-12">
            <slot></slot>
            <input type="text" v-model="value" @input="callback(value)" name="demo-name" id="demo-name" value="" placeholder="Name">
          </div>          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    console.log('enter...')
  },
  methods: {
    callback(val) {
      console.log(val)
      this.$emit('changed', val)
    }  
  }
}
</script>

<style>

</style>
