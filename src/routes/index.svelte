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
    <div slot="footer">
        <p>Photo by <a href="https://unsplash.com/@dhika88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andhika Soreng</a> on <a href="https://unsplash.com/s/photos/mountain-bike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </div>
</Layout>
