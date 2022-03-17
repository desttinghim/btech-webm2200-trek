<script>
 import Image from "$lib/components/image.svelte"
 import { assets } from "$app/paths";
</script>
<!-- Help from https://tailwindcomponents.com/component/hero-with-background-image -->
<!-- Using style here because tailwind can't compute the url correctly without having
the full string available in the source. -->
<header style="background: top/cover url({assets}/mountain-bike.jpg); "
        class="w-full h-96 bg-top bg-cover">
    <div class="flex items-center justify-center
                w-full h-full
                bg-gray-900 bg-opacity-50">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase
                        lg:text-3xl">
                Choose A Trek Bike For Your Next
                <div class="text-7xl">Adventure</div>
            </h1>
            <button class="w-full px-4 py-2 mt-4 lg:w-auto rounded-md
                            text-base font-semibold text-white uppercase
                            transition-colors duration-200 transform
                            bg-orange-600 hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
                Shop Now
            </button>
        </div>
    </div>
</header>
<!-- Attribution -->
<div class="bg-red-500 px-4 py-1 font-medium text-white text-right">
    <p class="text-sm">Mountain Bike Photo by <a href="https://unsplash.com/@dhika88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andhika Soreng</a> on <a href="https://unsplash.com/s/photos/mountain-bike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
</div>
<!-- Calls to action -->
<div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
    <div class="p-4 bg-white rounded text-center space-y-4
                flex flex-col">
        <Image src="{assets}/bike-shop-16x9.jpg" alt="A man in a shop surrounded by bikes.">
            <span slot="attribution">Photo by <a href="https://unsplash.com/@tom607?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tom Austin</a> on <a href="https://unsplash.com/collections/zN2b34UB6vk/intro-to-design---trek-bikes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </Image>
        <p class="font-semibold text-xl">Find out about our latest happenings!</p>
        <p class="text-justify grow">We like to keep our customers up to date with the awesome bikes we're building by sending out a newsletter.</p>
        <button class="p-2 bg-orange-500 rounded text-white">Read Newsletter</button>
    </div>
    <div class="p-4 bg-white rounded text-center space-y-4
                flex flex-col">
        <Image src="{assets}/broken-bike-16x9.jpg" alt="A bike missing it's tires and seatpost." >
            <span slot="attribution">Photo by <a href="https://unsplash.com/@lg17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lance Grandahl</a> on <a href="https://unsplash.com/collections/zN2b34UB6vk/intro-to-design---trek-bikes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </Image>
        <p class="font-semibold text-xl">Need help with your bike?</p>
        <p class="text-justify grow">We're proud of the quality of our bikes, but life happens. Visit our support center and get help to continue your adventure!</p>
        <button class="p-2 bg-orange-500 rounded text-white">Contact Support</button>
    </div>
</div>
<!-- Newsletter Signup -->
<div class="px-4 pb-4 w-full h-full">
    <form on:submit|preventDefault
        class="p-4 bg-gray-100 rounded w-full h-full text-center">
        <label for="email"
                class="text-xl font-semibold" >Sign up for our Newsletter!</label>
        <p class="pb-4">Get our latest accomplishments directly in your email.</p>
        <span class="flex justify-between">
            <input type="text" name="email" value="" placeholder="Your Email"
                class="rounded-l w-full p-2 focus:rounded-r" />
            <button type="submit"
                    class="rounded-r bg-orange-500 p-2 text-white focus:rounded-l" >
                Subscribe</button>
        </span>
    </form>
</div>
