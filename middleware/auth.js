export default defineNuxtRouteMiddleware((from, to) => {
    const user = useSupabaseUser();

    if (!user && to.fullPath === '/checkout') {
        return navigateTo('auth');
    }
})