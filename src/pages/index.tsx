import Calculator, { Config } from "@/components/calculator/calculator";
import { Store } from "@/lib/store";
import Head from "next/head";
import { useEffect, useState } from "react";

const defaultData: Config = {
  ratio: 16.67,
  water: 250,
  beans: 15,
};

export default function Home() {
  const [config, setConfig] = useState<Config | undefined>();

  useEffect(() => {
    const c = Store.getValueOrDefault(
      "calculator-profile",
      defaultData
    ) as Config;
    setConfig(c);
  }, []);

  return (
    <>
      <Head>
        <title>Coffee calculator</title>
      </Head>

      <main className="flex max-w-md mx-auto p-5 md:p-0 md:pt-4 min-h-screen flex-col items-center justify-between">
        {config && <Calculator {...config} default={defaultData}/>}
      </main>
    </>
  );
}
