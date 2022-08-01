<script>
  import { calculate } from "./calculator";
  import { save, get } from "./state";

  let ratio = get("ratio", 16.67);
  let weight = get("weight", 30);
  let volume = get("volume", 0);
  let type = "volume";

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

    save(volume, "volume");
    save(weight, "weight");
    save(ratio, "ratio");
  };

  onChange();
</script>

<div class="grid auto-cols-[min_auto] gap-x-4 gap-y-2">
  <strong class="col-span-2">Ratio</strong>
  <div>
    <input type="radio" value="ratio" bind:group={type} />
  </div>
  <div>
    <input
      type="number"
      class="border rounded-sm border-gray-400"
      bind:value={ratio}
      on:change={onChange}
    />
  </div>

  <strong class="col-span-2">Weight</strong>
  <div>
    <input type="radio" value="weight" bind:group={type} />
  </div>
  <div>
    <input
      type="number"
      class="border rounded-sm border-gray-400"
      bind:value={weight}
      on:change={onChange}
    />
  </div>

  <strong class="col-span-2">Volume</strong>
  <div>
    <input type="radio" value="volume" bind:group={type} />
  </div>
  <div>
    <input
      type="number"
      class="border rounded-sm border-gray-400"
      bind:value={volume}
      on:change={onChange}
    />
  </div>
</div>
