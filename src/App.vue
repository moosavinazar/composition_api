<template>
  <h1>App vue</h1>
  <Home :appName="name" @updateName="update"/>
  <div ref="root">this is a root element</div>
</template>

<script>
import { onMounted, provide, ref } from 'vue'
import HomeWeb from './components/HomeWeb.vue'

export default {
  components: {
    Home: HomeWeb
  },
  setup() {
    const name = ref('selin');

    const root = ref(null);
    console.log(root.value);

    function update(newName) {
      name.value = newName;
    }

    provide('name', 'asiye');

    onMounted(() => {
      console.log('component is mounted!');
      console.log(root.value);
    });

    return {
      name,
      update,
      root
    }
  }
}
</script>

<style>

</style>
