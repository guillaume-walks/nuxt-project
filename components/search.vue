<template>
  <div class="major">
    <div class="inner">
      <form>
        <div class="row gtr-uniform">
          <div class="col-12">
            <input type="text" v-model="value" @input="callback(value)" name="demo-name" id="demo-name" value="" placeholder="Name">
            <button @click.prevent="callback(value)">click</button>
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
      this.$emit('clicked', val)
    }  
  }
}
</script>

<style>

</style>
