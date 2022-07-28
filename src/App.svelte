<script>
  import "./app.css";
  import logo from './assets/coffee.svg'
  import Calculator from './lib/Calculator.svelte'
</script>

<main class="p-4 text-lg">
  <div class="flex justify-center">
    <img src={logo} alt="Coffee cup" class="h-24" />
  </div>

  <Calculator />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
