<script>
 import "../app.css";
 import Navbar from "./navbar.svelte";

 const menuItems = [
     {name: "Home", link: "/", hideInNavbar: true},
     {name: "News", link: "#!"},
     {name: "Contact", link: "#!"},
     {name: "Support", link: "#!"},
     {name: "Shop", link: "#!"},
 ];
</script>

<header>
    <Navbar
        search
        home={{name: "Trek", link: "/"}}
        item={menuItems}
    />
    <slot name="header"></slot>
</header>

<slot />

<footer class="px-4
               pt-4
               md:pt-6
               space-y-4
               bg-white
               rounded-t-lg
               dark:bg-gray-800
               text-gray-500
               dark:text-gray-400
               ">
    <slot name="footer"></slot>
    {#if $$slots.footer}
    <hr />
    {/if}
    <div class="md:flex
                md:items-center
                md:justify-between
                ">
        <!-- Copyright Notice -->
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://louispearson.work" class="hover:underline">Louis Pearson</a>. CC-BY-AT-SA.
        </span>
        <!-- Navigation -->
        <nav>
            <ul class="text-base text-gray-500 dark:text-gray-400
                    pt-4
                    md:flex md:items-center md:justify-between md:pt-0">
                {#each menuItems as menu}
                {#if !menu.hideInFooter}
                <li>
                    <a class="md:p-4 py-2 block hover:text-orange-400"
                        href="{menu.link}">{menu.name}</a>
                </li>
                {/if}
                {/each}
            </ul>
        </nav>
    </div>
</footer>
