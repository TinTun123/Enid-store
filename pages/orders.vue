<template>
    <MainLayout>
        <div id="OrdersPage" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
            <div class="bg-white w-full p-6 min-h-[150px]">
                <div class="flex items-center text-xl">
                    <Icon name="carbon:delivery" size="35" color="#5FCB04"/>
                    <span class="pl-4">Orders</span>
                </div>

                <div class="text-sm pl-[50px]" 
                v-if="orders && orders.data" 
                v-for="(order) in orders.data" :key="order.id">
                    <div class="border-b py-1">
                        <p>Stripe Id: {{ order.stripeId }}</p>

                        <div class="pt-2">

                        </div>
                        <div v-for="(item, i) in order.orderItem" :key="i">
                            <NuxtLink :to="`/item/${item.productId}`" class="flex items-center gap-3 hover:underline hover:text-blue-500">
                                <img :src="item.product.url" width="40" alt="">
                                {{ item.product.title }}
                            </NuxtLink>
                        </div>

                        <div class="pt-2 pb-5">
                            Delivery Address: {{ order.name }}, {{ order.address }}, {{ order.zipcode }}, {{ order.city }}, {{ order.country }}
                        </div>
                    </div>
                </div>
                <div v-else class="flex items-center justify-center">
                    You have no order history.
                </div>

            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const user = useSupabaseUser();

const orders = ref(null);

onBeforeMount(async () => {
    orders.value = await useFetch(`/api/prisma/get-all-order-by-user/${user.value.id}`);
    console.log(orders.value.data);
})

onMounted(() => {
    if (!user) {
        return navigateTo('/auth');
    }
    console.log('user check pass');

    setTimeout(() => {
        userStore.isLoading = false;
    }, 500);
})
</script>

<style>
</style>