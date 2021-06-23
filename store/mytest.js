export const state = () => ({
  list: 'nozero'
});

export const mutations = {
  adicionar(state, payload) {
    state.list = payload
  }
};

export const getters = {
  myList: (state, getters) => {
    return state.list
  }
}