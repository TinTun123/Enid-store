<template>
    <MainLayout>
        <div id="indexPage" class="max-w-[1200px] mt-8 mx-auto">
            <div v-if="products" class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:gird-cols-3 grid-cols-2 gap-4">
                <div  v-for="(pro, i) in products.data" :key="pro">
                   <Product :product="pro"/>
                </div>
            </div>
        </div>
    </MainLayout>

</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/userStore';


const userStore = useUserStore();
const products = ref(null);
onBeforeMount(async () => {
    products.value = await useFetch(`/api/prisma/get-all-products`);
    setTimeout(() => userStore.isLoading = false, 200);
})

</script>

<style>
</style>