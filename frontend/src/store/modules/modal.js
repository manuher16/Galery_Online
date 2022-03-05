export default {
    namespaced: true,
    state: {
        uploadImages: {
            show: false,
        },
    },
    methods: {
        showModalUploadImages: (state) => {
            state.uploadImages.show = true;
        },
        hideModalUploadImages: (state) => {
            state.uploadImages.show = false;
        },
    }
}