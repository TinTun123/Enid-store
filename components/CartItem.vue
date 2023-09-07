<template>
    <div class="flex justify-start my-2">
        <div class="my-auto">
            <div @mouseenter="isHover = true" @mouseleave="isHover = false" class="flex items-center justify-center p-0.5 cursor-pointer">
                <div @click="isSelected = !isSelected"
                class="flex justify-center items-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
                :class="[isHover ? 'border-[#FD374F]' : 'border-gray-300', isSelected ? 'bg-[#FD374F]' : '']">
                    <div class="h-[8px] w-[8px] rounded-full bg-white"/>

                    
                </div>
            </div>
        </div>

        <img :src="product.url" class="rounded-md md:-[150px] w-[90px] aspect-square" alt="">

        <div class="overflow-hidden pl-2 w-full">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center justify-between truncate">

                    <span class="hidden sm:block bg-[#009CDE] text-white text-[9px] font-semibold px-1.5 rounded-sm">Welcome Deal</span>

                    <div class="truncate sm:pl-2">
                        {{ product.title }}
                    </div>
                </div>

                <button @click="removeFromCart()" class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500 ">
                    <Icon name="material-symbols:delete-outline" size="20"/>
                </button>
            </div>

            <div class="text-xl font-semibold">
                $ <span class="font-bold">{{ (product.price / 100).toFixed(2) }}</span>
            </div>

            <p class="text-[#009A66] text-xs font-semibold pt-1">
                Free 11-day delivery over $8.28 
            </p>

            <p class="text-[#009A66] text-xs font-semibold pt-1">
                Free Shipping 
            </p>

            <div class="items-center justify-end flex">
                <button @click="removeFromCart()" class="sm:hidden block -mt-0.5 hover:text-red-500 ">
                    <Icon name="material-symbols:delete-outline" size="20"/>
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';


const userStore = useUserStore();
const props = defineProps(['product', 'selectedArray']);

const {product, selectedArray} = toRefs(props);

const emit = defineEmits(['selectedRadio']);

let isHover = ref(false);
let isSelected = ref(false);

const removeFromCart = () => {
    userStore.cart.forEach((prod, index) => {
        if (prod.id === product.value.id) {
            userStore.cart.splice(index, 1);
        }
    })
}

watch(() => isSelected.value,(oldval, newVal) => {
    emit('selectedRadio', {id : product.value.id, val : newVal})
})
</script>


<style>

</style>