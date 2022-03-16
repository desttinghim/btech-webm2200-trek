<script>
 import "../app.css";
 import Navbar from "./navbar.svelte";
</script>

<header>
    <Navbar
        home={{name: "Trek", link: "/"}}
        search
        item={[
                {name: "News", link: "#!"},
                {name: "Support", link: "#!"},
                {name: "Shop", link: "#!"},
                ]}
    />
    <slot name="header"></slot>
</header>

<slot />

<footer>
    <slot name="footer"></slot>
</footer>
