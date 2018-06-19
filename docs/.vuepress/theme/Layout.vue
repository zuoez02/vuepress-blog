<template lang="pug">
mdc-layout-app#app
  toolbar(slot="toolbar")
  drawer(slot="drawer")
  main
    Content
</template>
<script>
export default {
  name: 'Layout',
  computed: {
    pages() {
      return this.$site.pages;
    }
  }
}
</script>
