export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLOggedIn = false;
    if(!userIsLOggedIn){
        return navigateTo({path: "/login"})
    }
})
