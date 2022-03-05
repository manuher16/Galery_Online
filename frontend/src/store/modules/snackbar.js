export default {
    namespaced: true,
    state: {
        show: false,
        message: '',
        timeout: 5000,
        color: 'primary',
    },
    mutations: {
        hide(state) {
            state.show = false;
        },
        showSnackbar(state, data) {
            state.show = true;
            if (data.message) {
                state.message = data.message;
            }
            if (data.timeout) {
                state.timeout = data.timeout;
            }
            if (data.color) {
                state.color = data.color;
            }


        }
    },
    actions: {
        showSnackbar({ commit, state }, data) {
            if (!state.show) {
                commit('showSnackbar', data);
                setTimeout(() => {
                    commit('hide');
                }, state.timeout);
            }
        }
    }
}