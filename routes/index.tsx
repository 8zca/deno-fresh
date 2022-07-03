/** @jsx h */
import { h } from 'preact';
import Counter from '../islands/Counter.tsx';

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
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh!?
      </p>
      <Counter start={3} />
    </div>
  );
}
