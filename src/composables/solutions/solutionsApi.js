import { ref, onMounted } from "vue";

export function getSolutions() {
  const solutions = ref([]);

  const getSol = async () => {
    await fetch("https://v2-deeper-vision-system.codebase-product.com/api/home")
      .then((res) => res.json())
      .then((data) => console.log(data.page.solutions));
  };

  onMounted(getSol);

  return { solutions, getSol };
}
