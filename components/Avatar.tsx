import { asset } from "$fresh/runtime.ts";

export function Avatar() {
  return (
    <div
      class="w-full h-60 bg-cover bg-black py-6"
      style={`background-image: url('/images/background.jpg');`}
    >
      <div class="h-48 w-48 bg-red-600 rounded-full mx-auto border-gray-100 border-2 px-1 py-1">
        <img
          class="h-full w-full rounded-full border-2 border-gray-100"
          src={asset("/images/avatar.jpg")}
          alt="avatar"
        />
      </div>
    </div>
  );
}
