import Vue from "vue";
import { camelCase, upperFirst } from "lodash";

const requireComponent = require.context("@/components", true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
