import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Input, { InputProps } from "./input";
import styles from "./ratio.module.css";

export interface RatioProps extends InputProps {
  onOpen?: (open: boolean) => void;
}

export default function Ratio(props: RatioProps) {
  return (
    <>
      <div className="w-full pt-10">
        <div
          className={
            styles.disclosure +
            " w-full rounded-xl p-2"
          }
        >
          <Disclosure>
            {({ open }) => (
              <>
                {props.onOpen?.(open)}

                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-sm focus:outline-none">
                  <span>Brew ratio: {props.value}</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2">
                  <Input {...props} className="w-full" />
                  <p className="text-sm pt-3 text-sm">
                    Edit beans and water to change the ratio, or edit the input
                    above
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}
