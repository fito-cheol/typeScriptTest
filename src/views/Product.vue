<template>
  <div class="product">
    <Product inputMessage="props Message from views" />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product/Product.vue";

export default {
  name: "home",
  components: {
    Product
  }
};
</script>
