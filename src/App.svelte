<script>
  import "./app.css";
  import logo from './assets/coffee.svg'
  import Calculator from './lib/Calculator.svelte'
</script>

<main class="p-4 text-lg">
  <div class="flex justify-center">
    <img src={logo} alt="Cofee cup" />
  </div>

  <Calculator />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
