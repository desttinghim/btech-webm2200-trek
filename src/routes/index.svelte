<script>
 import Layout from "./_layout.svelte";
</script>
<!-- Help from https://tailwindcomponents.com/component/hero-with-background-image -->
<Layout>
    <div slot="header"
         class="w-full h-96
               bg-center bg-cover"
         style="background-image: url(/mountain-bike.jpg);" >
        <div class="flex items-center justify-center
                    w-full h-full
                    bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white uppercase
                           lg:text-3xl">
                    Choose A Trek Bike For Your Next Adventure
                </h1>
                <button class="w-full px-4 py-2 mt-4 lg:w-auto rounded-md
                               text-sm font-medium text-white uppercase
                               transition-colors duration-200 transform
                               bg-orange-600 hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
                    Shop Now
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 flex items-center space-x-4 w-full h-full">
        <div class="p-4 bg-white rounded w-full h-full text-center space-y-4">
            <img class="w-full"
                src="/bike-shop-16x9.jpg" alt="A man in a shop surrounded by bikes." />
            <p class="font-bold text-xl">Want to keep up with our latest products?</p>
            <button class="p-2 bg-orange-500 rounded text-white">Read Newsletter</button>
        </div>
        <div class="p-4 bg-white rounded w-full h-full text-center space-y-4">
            <img class="aspect-video"
                 src="/broken-bike-16x9.jpg" alt="A bike missing it's tires and seatpost." />
            <p class="font-bold text-xl">Need help with your bike?</p>
            <button class="p-2 bg-orange-500 rounded text-white">Contact Support</button>
        </div>
    </div>
    <div slot="footer">
        <p>Photo by <a href="https://unsplash.com/@dhika88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andhika Soreng</a> on <a href="https://unsplash.com/s/photos/mountain-bike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <p>Photo by <a href="https://unsplash.com/@lg17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lance Grandahl</a> on <a href="https://unsplash.com/collections/zN2b34UB6vk/intro-to-design---trek-bikes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <p>Photo by <a href="https://unsplash.com/@tom607?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tom Austin</a> on <a href="https://unsplash.com/collections/zN2b34UB6vk/intro-to-design---trek-bikes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </div>
</Layout>
