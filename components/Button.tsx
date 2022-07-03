/** @jsx h */
import { h } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

type Props = {
  text: string
  disabled?: boolean;
  clcikHandler: () => void;
}

export default function Button(props: Props) {
  return (
    <button onClick={props.clcikHandler} disabled={props.disabled || !IS_BROWSER}>{props.text}</button>
  );
}
