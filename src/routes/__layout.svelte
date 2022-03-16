<script>
 import "../app.css";
 import Navbar from "./navbar.svelte";
</script>

<Navbar
    home={{name: "Trek", link: "/"}}
    search
    item={[
            {name: "News", link: "#!"},
            {name: "Support", link: "#!"},
            {name: "Shop", link: "#!"},
            ]}
/>

<slot />
