import { Avatar } from "../components/Avatar.tsx";
import { ContactInfo } from "../components/ContactInfo.tsx";
import { Links } from "../components/Links.tsx";
import { MainHead } from "../components/MainHead.tsx";

export default function Home() {
  return (
    <>
      <MainHead />
      <div class="w-full flex flex-col items-center">
        <Avatar />
        <div class="max-w-md">
          <ContactInfo />
          <Links />
        </div>
      </div>
    </>
  );
}
