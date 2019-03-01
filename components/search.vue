<template>
  <div class="major">
    <div class="inner">
      <form>
        <div class="row gtr-uniform">
          <div class="col-12">
            <input type="text" v-model="value" @click="callback(value)" name="demo-name" id="demo-name" value="" placeholder="Name">
            <button @click="callback('sdsdsds')">click</button>
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
      this.$emit('search-changed', val)
    }  
  }
}
</script>

<style>

</style>
