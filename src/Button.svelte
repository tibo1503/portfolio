<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
    </script>
    <button on:click={toggle}>
        <slot/>
    </button>
    <style>
        button {
            background-color: #000000;
            border: none;
            border-radius: 8px;
            padding: 16px;
            text-transform: uppercase;
            transition: background-color 0.3s;
        }
        :global(body.dark-mode) button {
            background-color: #ffffff;
        }
    </style>