/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Button } from '/components/index.ts';

interface CounterProps {
  start: number;
}

// Clientで動くものはislands配下かつexport defaultしないと動かない
export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <Button clcikHandler={() => setCount(count - 1)} text='-1' disabled={!IS_BROWSER} />
      <Button clcikHandler={() => setCount(count + 1)} text='+1' disabled={!IS_BROWSER} />
    </div>
  );
}
