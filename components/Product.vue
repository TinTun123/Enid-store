<template>
    <div :id="`ProductComponent`" class="bg-white inline-block rounded w-full hover:shadow-[0_0_10px_3px_rgba(0, 0, 0, 0.15)] cursor_pointer">
        <NuxtLink :to="`/item/${product.id}`">
            <div class="mx-auto">
                <img :src="product.url" class="rounded-t mx-auto" alt="" >
            </div>


            <div id="ProductDetails">

                <span class="flex items-center justify-start gap-3 px-1 pt-1">
                    <span class="text-[#FF6674] font-semibold">
                        ${{ priceComputed }}
                    </span>

                    <span class="text-gray-500 text-sm text-light line-through">
                        ${{ oldPriceCOmputed }}
                    </span>
                </span>

                <span class="px-1 relative -top-1.5 text-[#FF6674] text-sm font-semibold">
                    Extra 5% off
                </span>

                <div class="flex items-center gap-1 px-1 relative -top-1">
                    <span class="bg-[#009CDE] text-white text-[9px] font-semibold px-1.5 rounded-sm">
                        Welcome deal
                    </span>
                    <span class="bg-[#5F5F5F] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">
                        Top Selling
                    </span>
                </div>

                <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
                    5,000 + sold <Icon name="material-symbols:star-rate" color="#757575" size="" class="ml-1.5">4.7</Icon>
                </p>

                <p class="px-1 pt-0.5 text-xs text-[#252525]">
                    {{ product.title.substring(0, 60) }}
                </p>

                <p class="px-1 pb-1">
                    <span class="text-[#009A66] text-xs font-semibold">
                        Free shipping
                    </span>
                </p>

            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(['product']);

const {product} = toRefs(props);

const priceComputed = computed(() => {
    return (product.value.price / 100).toFixed(2);
});

const oldPriceCOmputed = computed(() => {
    let res = (product.value.price + (product.value.price / 20)) / 100;
    return res.toFixed(2);
})
</script>


<style>

</style>