<template>
  <h1>Home</h1>
  <h1>{{ name }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="updateObj">update</button>
  <hr>
  <h1>{{ count }}</h1>
  <button @click="increment">increment</button>
  <hr>
  <h1>{{ fullname }}</h1>
  <button @click="updateName">updateName</button>
  <hr>
  <h1 style="color: red;">{{ appName }}</h1>
  <button @click="update">update App name</button>
  <hr>
  <h1>{{ providedName }}</h1>
</template>

<script>
import { computed, inject, reactive, ref, watch, watchEffect } from 'vue';
import { useCounter } from '../composable/useCounter.js'

export default {
  props: ['appName'],
  // setup() {
  // setup(props) {
  // setup(props, context) {
  //   console.log(context.emit('updateName', 'mohamad'))
  setup(props, {emit}) {

    console.log(props.appName);
    function update() {
      emit('updateName', 'mohamad');
    }

    // const {count, increment} = useCounter();
    const counter = ref(2);
    const {count, increment} = useCounter(counter);

    const name = ref('hasan');
    const lastname = ref('moosavi');
    // let name = ref(true);
    // let name = ref(25);
    // let name = ref(null);
    const obj = reactive({
      a:'A',
      b:'B'
    })

    function updateObj() {
      name.value = 'hassan moosavi';
      obj.a = 'C';
    }

    // const count = ref(0);

    // function increment() {
    //     count.value ++;
    // }

    const fullname = computed(() => {
      return name.value + ' ' + lastname.value;
    });
    
    watch(name, (newValue, oldValue) => {
      console.log(name.value, newValue, oldValue);
    });

    watch([name, lastname], (newValue, oldValue) => {
      console.log(name.value, newValue, oldValue);
    });

    watchEffect(() => {
      console.log(name.value);
      console.log(lastname.value);
    });

    function updateName() {
      name.value = 'mohamad'
    }

    const providedName = inject('name');

    return {
      name, 
      updateObj,
      obj,
      count,
      increment,
      fullname,
      updateName,
      update,
      providedName
    };
  }
}
</script>

<style>

</style>