<script>
  let ratio = 16.67;
  let weight = 30;
  let volume = 0;
  let type = "volume";

  const calculate = (r, w, v, t) => {
    if (t === "volume") {
      return Math.round(w * r * 100) / 100;
    }

    if (t === "weight") {
      return Math.round(v / r * 100) / 100;
    }

    return Math.round(v / w * 100) / 100;
  };

  const onChange = () => {
    if (type === "volume") {
      volume = calculate(ratio, weight, volume, type);
    }

    if (type === "weight") {
      weight = calculate(ratio, weight, volume, type);
    }

    if (type === "ratio") {
      ratio = calculate(ratio, weight, volume, type);
    }
  };

  onChange();
</script>

<div class="grid auto-cols-[min_auto] gap-x-4 gap-y-2">
  <strong class="col-span-2">Ratio</strong>
  <div>
    <input type="radio" value="ratio" bind:group={type}/>
  </div>
  <div>
    <input
      type="number"
      class="border rounded-sm border-gray-400"
      bind:value={ratio} on:change={onChange} />
  </div>

  <strong class="col-span-2">Weight</strong>
  <div>
    <input type="radio" value="weight" bind:group={type}/>
  </div>
  <div>
    <input
      type="number"
      class="border rounded-sm border-gray-400"
      bind:value={weight} on:change={onChange}/>
  </div>

  <strong class="col-span-2">Volume</strong>
  <div>
    <input type="radio" value="volume" bind:group={type} />
  </div>
  <div>
    <input
      type="number"
      class="border rounded-sm border-gray-400"
      bind:value={volume} on:change={onChange}/>
  </div>
</div>
