<!-- Followed the following to figure out how to make a navbar in Tailwind
     https://blog.logrocket.com/building-responsive-navbar-tailwind-css/ -->
<!-- I used the navbar with search component here as a reference too
     https://flowbite.com/docs/components/navbar/ -->
<script>
 export let home;
 export let item;
 export let search = false;

 // Set to false by default so the site will degrade gracefully on
 // clients without JS
 let hidden = false;

 function toggle() {
     hidden = !hidden;
 }
</script>
<!-- Navbar -->
<nav
    on:load={toggle()}
    class="flex flex-wrap
            items-center
            justify-between
            w-full
            py-4
            md:py-0
            px-4
            text-lg text-gray-700
            bg-white dark:bg-gray-800
            ">
    <!-- Logo -->
    <a href="{home.link}" class="flex items-center text-black dark:text-white">
        <svg
            width="32" height="32"
            stroke="currentColor"
            viewBox="0 0 33.867 33.867"
            xmlns="http://www.w3.org/2000/svg">
            <path style="fill:none;stroke-width:2.11666px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1" d="m2.117 24.342 8.466-16.934 8.467 14.817 6.35-8.467 6.35 10.584"/>
        </svg>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{home.name}</span>
    </a>
    <!-- Logo -->
    <!-- Search -->
    {#if search}
    <div class="flex md:order-2">
        <div class="hidden relative mr-3 md:mr-0 md:block">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
        </div>
    </div>
    {/if}
    <!-- Search -->
    <!-- Hamburger Icon -->
    <button
        on:click={toggle}
        class="inline-flex
               items-center
               p-2
               ml-3
               text-sm
               text-gray-500
               rounded-lg
               md:hidden
               hover:bg-gray-100
               focus:outline-none
               focus:ring-2
               focus:ring-gray-200
               dark:text-gray-400
               dark:hover:bg-gray-700
               dark:focus:ring-gray-600"
        data-collapse-toggle="mobile-menu-3"
        type="button"
        aria-controls="mobile-menu-3"
        aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
        <svg class="hidden w-6 h-6"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </button>
    <!-- Hamburger Icon -->
    <div class="w-full
                md:flex
                md:items-center
                md:w-auto"
         class:hidden
         id="menu" >
        <ul class="text-base text-gray-700
                    pt-4
                    md:flex
                    md:justify-between
                    md:pt-0" >
            {#each item as menu}
            {#if !menu.hideInNavbar}
            <li>
                <a class="md:p-4 py-2 block hover:text-orange-400 dark:text-white"
                    href="{menu.link}">{menu.name}</a>
            </li>
            {/if}
            {/each}
        </ul>
    </div>
</nav>
<!-- Navbar -->
