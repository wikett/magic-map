export const useUser = defineStore("userStore", {
    // state
    state: () => {
        return {
            isLoggedIn: false,
            user: {},
            authReady: false
        };
    },

    // actions
    actions: {
        login(){
            this.isLoggedIn = true;
            useRouter().push("/");
        },
        logout(){
            this.isLoggedIn = false;
        },
        isAuthReady(){
            this.authReady = true;
        }
    }

    // getters
})