import {ChangeEvent} from "react";

export interface TextAreaProps {
    placeholder: string;
    name: string;
    label: string;
    getValue(e:ChangeEvent<HTMLTextAreaElement>): void;
}