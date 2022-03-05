
export default {
    namespaced: true,
    state: {
        isLoggedIn: localStorage.getItem('isLoggedIn') == 'true' && localStorage.getItem('isLoggedIn') ? true : false,
        user: null,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        error: null,
        loading: false,
        isAdmin: false,
    },
    mutations: {
        setIsLoggedIn(state, value) {
            state.isLoggedIn = value;
        },
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setError(state, error) {
            state.error = error;
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
    },

}