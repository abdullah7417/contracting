import { ref, onMounted } from "vue";

export function getFeaturesImg() {
  const features = ref([]);

  const getImages = async () => {
    await fetch("https://v2-deeper-vision-system.codebase-product.com/api/home")
      .then((res) => res.json())
      .then((data) => (features.value = data.page.features));
  };

  onMounted(getImages);

  return { features, getImages };
}
