import { asset, Head } from "$fresh/runtime.ts";

export function MainHead() {
  return (
    <Head>
      <title>Naruto Minecrafter</title>
      <link rel="stylesheet" href={asset("/styles/default.css")} />
    </Head>
  );
}
