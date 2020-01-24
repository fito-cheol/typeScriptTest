import { Module } from "vuex";
import { RootState } from "@/store/index";
interface moduleA {
  factoryData: string;
}
const module: Module<moduleA, RootState> = {
  namespaced: true, // 지정을 해줘야 RootState와 따로 동작한다. 없으면, RootState 변경시 같이 변경
  state: { factoryData: "Factory Data" }, //RootState와 똑같이 작성해도 된다.
  mutations: {
    setData(state, data: string) {
      state.factoryData = data;
    }
  },
  actions: {
    setRootData({ commit }, data: string) {
      commit("setData", data);
    }
  },
  getters: { data: state => state.factoryData }
};

export default module;
