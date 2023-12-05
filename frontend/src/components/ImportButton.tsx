import { JSXElement } from "solid-js";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button(props: ButtonProps): JSXElement {
  return <button onClick={props.onClick}> {props.label}</button>;
}
