<template>
  <div>
    <h1>{{ pageName }}</h1>
    <h2>{{ inputMessage }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mapState } from "vuex";
import { ProductInfo } from "../../store/modules/product";
import { mount } from "@vue/test-utils";

@Component({
  computed: mapState(
    "product", // product module
    ["pageName", "product"] // state
  )
})
export default class Product extends Vue {
  // 데이터 선언
  pageName!: string;
  product!: ProductInfo;
  @Prop(String) inputMessage: string;
}
</script>
