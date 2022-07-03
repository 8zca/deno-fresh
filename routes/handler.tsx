/** @jsx h */
import { h } from 'preact';
import { Handlers } from '$fresh/server.ts';

// handler利用時はセットでレンダラーが必要
// apiで同じ構文を利用すると `Error: This page does not have a component to render.` が出る
export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set('X-Custom-Header', 'Hello');
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>Handler</h1>
      <p>See Network.</p>
      <p>x-custom-header: Hello is set in the response header.</p>
    </main>
  );
}
