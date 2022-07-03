/** @jsx h */
import { h } from 'preact';
import { Button } from '/components/index.ts';
import Counter from '/islands/Counter.tsx';

// 基本的にサーバでレンダリングされる
// 個別にクライアントでレンダリングする部分のみislandsに配置するアーキテクチャ
// see: https://jasonformat.com/islands-architecture/
// islands配下のコンポーネントはパスカルケースしないといけない
export default function Home() {
  return (
    <div>
      <img
        src='/logo.svg'
        height='100px'
        alt='the fresh logo: a sliced lemon dripping with juice'
      />

      <Counter start={3} />

      <Button clcikHandler={() => console.log(1)} text='server-rendered button' />
    </div>
  );
}
