import Input, { InputProps } from "./input";

export default function Water(props: InputProps) {
    return (
        <>
            <span>Water</span>
            <Input {...props} />
        </>
    );
}