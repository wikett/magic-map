export const useUser = defineStore("userStore", {
    // state
    state: () => {
        return {
            isLoggedIn: false
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
    }

    // getters
})