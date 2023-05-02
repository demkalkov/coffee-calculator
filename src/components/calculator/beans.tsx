import Input, { InputProps } from "./input";

export default function Beans(props: InputProps) {
    return (
        <>
            <span>Beans</span>
            <Input {...props} />
        </>
    );
}