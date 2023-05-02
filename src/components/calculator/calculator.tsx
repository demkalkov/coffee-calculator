import { Store } from "@/lib/store";
import { PropsWithoutRef, useState } from "react";
import { calculate } from "../../lib/calculator";
import Beans from "./beans";
import Ratio from "./ratio";
import Water from "./water";

export interface Config {
  beans: number | string;
  water: number | string;
  ratio: number | string;
}

export type CalculatorProps = PropsWithoutRef<Config>;

export default function Calculator(
  config: CalculatorProps & { default: Config }
) {
  const [ratio, setRatio] = useState(+config.ratio);
  const [beans, setBeans] = useState(+config.beans);
  const [water, setWater] = useState(+config.water);

  let isRatioOpened = false;

  const onWaterChanged = (value: number) => {
    const b = calculate(
      ratio,
      beans,
      value,
      isRatioOpened ? "ratio" : "weight"
    );
    Store.save("calculator-profile", {
      ratio,
      water: value,
      beans: b,
    } as Config);
    if (isRatioOpened) {
      setRatio(b);
    } else {
      setBeans(b);
    }
    setWater(value);
  };

  const onBeansChanged = (value: number) => {
    const w = calculate(
      ratio,
      value,
      water,
      isRatioOpened ? "ratio" : "volume"
    );
    Store.save("calculator-profile", {
      ratio,
      water: w,
      beans: value,
    } as Config);
    if (isRatioOpened) {
      setRatio(w);
    } else {
      setWater(w);
    }
    setBeans(value);
  };

  const onRatioChanged = (value: number) => {
    const w = calculate(value, beans, water, "volume");
    Store.save("calculator-profile", {
      ratio: value,
      water: w,
      beans,
    } as Config);
    setWater(w);
    setRatio(value);
  };

  const resetToDefault = () => {
    setRatio(+config.default.ratio);
    setBeans(+config.default.beans);
    setWater(+config.default.water);
  };

  const onRatioOpened = (opened: boolean) => {
    isRatioOpened = opened;
  };

  return (
    <div className="container flex flex-col items-center">
      <h3
        className="mb-8 text-center"
        style={{
          fontSize: "1.4em",
        }}
      >
        Calculate pourover{" "}
        <span className="whitespace-nowrap">
          {" "}
          brew
          <button
            className="ml-3"
            title="Reset to default"
            onClick={resetToDefault}
          >
            ↺
          </button>
        </span>
      </h3>

      <div className="grid grid-cols-2 gap-2">
        <Beans value={beans} onChange={onBeansChanged}></Beans>
        <Water value={water} onChange={onWaterChanged}></Water>
      </div>

      <Ratio
        value={ratio}
        onChange={onRatioChanged}
        onOpen={onRatioOpened}
      ></Ratio>
    </div>
  );
}
