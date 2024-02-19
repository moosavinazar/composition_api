import { ref } from 'vue';

// export const useCounter = () => {
export const useCounter = (counter) => {
    const count = ref(0);

    function increment() {
        // count.value ++;
        count.value += counter.value;
    }

    return {
        count,
        increment
      };
}