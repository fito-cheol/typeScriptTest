<template>
  <div>
    <h1>{{ pageName }}</h1>
    <h2>{{ inputMessage }} {{ computedMsg }}</h2>
    <h2>{{ inputMessage2 }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {
  mapMutations,
  mapActions,
  mapState,
  createNamespacedHelpers
} from "vuex";
const {
  mapState: mapProductState,
  mapMutations: mapProductMutations,
  mapActions: mapProductActions
} = createNamespacedHelpers("product");
import { ProductInfo } from "../../store/modules/product";
import { mount } from "@vue/test-utils";

class Person {
  name!: string;
}

// https://github.com/vuejs/vue-class-component
@Component({
  // computed: mapState(
  //   "product", // product module
  //   ["pageName", "product"] // state
  // )
  computed: {
    ...mapProductState(["pageName", "product"])
  }
})
export default class Product extends Vue {
  // 데이터 선언
  // '!'는 초기화 속성에 붙이는 prefix (타입스크립트에게 미리 알려주는 역할)
  pageName!: string;
  product!: ProductInfo;
  @Prop(String) inputMessage!: string;
  @Prop({ default: "default message" }) inputMessage2!: string;
  count = 0;
  child = "son";

  person!: Person;

  get computedMsg() {
    return "computed " + this.inputMessage;
  }

  // created
  private mounted() {
    console.log(this.inputMessage);
  }

  @Watch("child")
  onChildChanged(val: string, oldVal: string) {}

  @Watch("person", { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch("person")
  onPersonChanged2(val: Person, oldVal: Person) {}
}
</script>
