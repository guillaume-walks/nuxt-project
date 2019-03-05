
import axios from 'axios';
import { productPath } from "@/const/config";

export const state = () => ({
  list: [],
  fetched: false,
});

export const mutations = {
  set(state, todos) {
    state.list = todos;
    state.fetched = true;
  },
};

export const actions = {
  async fetchProduct({ commit }) {
    const { data } = await axios.get(productPath)
    commit('set', data);
  },
}

export const getters = {
  userById: (state) => (id) => {
    return state.list.find(product => product.id == id);
  },
  isFetched: state => {
    return !!state.fetched;
  },
}
