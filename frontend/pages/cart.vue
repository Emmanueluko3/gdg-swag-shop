<template>
  <ClientOnly>
    <Header />
    <section class="py-32 px-14">
      <div class="mb-10 pb-8">
        <h1 class="text-center text-5xl xl:text-10xl font-medium">Cart</h1>
      </div>
      <div class="flex flex-wrap mb-0 md:mb-14">
        <div
          class="w-full md:w-8/12 xl:w-9/12 p-8 md:p-10 mb-14 md:mb-0 bg-white rounded-3xl"
        >
          <h3 class="mb-10 text-darkBlueGray-300 font-medium">2 products</h3>
          <div class="max-h-[85vh] w-full overflow-y-auto no-scrollbar">
            <div
              v-for="item in cartItems"
              :key="item.product.id"
              class="mb-8 pb-2 border-b-2 border-gray-200"
            >
              <div class="flex w-full flex-col md:flex-row mb-4">
                <img
                  class="h-40 w-full md:w-[38%] object-cover rounded-lg"
                  src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg"
                  alt=""
                />
                <div class="w-full md:w-[60%] md:px-4">
                  <a
                    class="block text-xl font-medium hover:text-blue-500"
                    href="#"
                    >Camfo
                  </a>
                  <h2 class="text-sm font-medium text-gray-400 mb-3">
                    In Stock
                  </h2>
                  <h2 class="text-xl font-medium text-blue-500">KES 20</h2>
                </div>
              </div>

              <div class="flex justify-between items-center mb-6 w-full">
                <button
                  class="text-blue-500 flex items-center hover:text-blue-600 font-semibold"
                >
                  <span class="material-icons">delete</span>
                  REMOVE
                </button>
                <div class="justify-between text-center flex bg-white">
                  <button
                    @click="productQuantity--"
                    class="border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <input
                    v-model="productQuantity"
                    type="number"
                    class="number-input w-6 outline-none focus:none"
                  />
                  <button
                    @click="productQuantity++"
                    class="border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500 ml-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12 xl:w-3/12 px-8 mb-8">
          <h2 class="mb-7 md:mt-6 text-3xl font-medium">Cart summary</h2>
          <div
            class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-medium rounded-3xl"
          >
            <p>Subtotal</p>
            <p class="flex items-center text-xl">
              <span class="mr-2">$</span>
              710,70
            </p>
          </div>
          <div
            class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-medium rounded-3xl"
          >
            <p>Shipping</p>
            <p class="flex items-center text-xl">
              <span class="mr-2">$</span>
              10,00
            </p>
          </div>
          <div
            class="flex w-full items-center justify-between bg-white py-4 px-10 mb-6 rounded-3xl"
          >
            <p class="font-semibold">Total</p>

            <p class="flex items-center font-semibold text-xl text-blue-500">
              <span class="mr-2">$</span>720,70
            </p>
          </div>
          <a
            class="inline-block w-full py-3 px-10 text-xl leading-6 text-white font-medium tracking-tighter text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
            href="#"
            >Checkout</a
          >
        </div>
      </div>
      <div class="md:w-96">
        <a
          class="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter text-center bg-white hover:bg-blue-600 hover:text-white rounded-xl"
          href="/products"
          >Back to shop</a
        >
      </div>
    </section>
    <Footer />
  </ClientOnly>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "app",
  data() {
    return {
      productQuantity: 1,
    };
  },
  computed: {
    totalItems() {
      if (process.client) {
        return (JSON.parse(localStorage.getItem("cartItems")) ?? []).length;
      }

      return 0;
    },
    cartItems() {
      if (process.client) {
        return JSON.parse(localStorage.getItem("cartItems")) ?? [];
      }

      return [];
    },
  },
};
</script>
