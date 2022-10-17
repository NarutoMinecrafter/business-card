import { Channel } from "./svg/Channel.tsx";
import { Discord } from "./svg/Discord.tsx";
import { Instagram } from "./svg/Instagram.tsx";
import { Phone } from "./svg/Phone.tsx";
import { Spotify } from "./svg/Spotify.tsx";
import { Telegram } from "./svg/Telegram.tsx";
import { Tiktok } from "./svg/Tiktok.tsx";

export function Links() {
  const liks = [
    {
      href: "tel:+380680243127",
      text: "+380 68 024 3127",
      icon: <Phone />,
    },
    {
      href: "https://t.me/narutominecrafter",
      text: "@narutominecrafter",
      icon: <Telegram />,
    },
    {
      href: "https://www.instagram.com/narutominecrafter",
      text: "@narutominecrafter",
      icon: <Instagram />,
    },
    {
      href: "https://tiktok.com/@narutominecrafter",
      text: "@narutominecrafter",
      icon: <Tiktok />,
    },
    {
      href: "https://discord.com/users/463267828984840193",
      text: "Naruto Minecrafter#0368",
      icon: <Discord />,
    },
    {
      href: "https://open.spotify.com/user/bg7ctz7zkpeu75h9om3tm87e4?si=e2407447f3bf4a2b",
      text: "Naruto Minecrafter",
      icon: <Spotify />,
    },
    {
      href: "https://t.me/inside_naruto",
      text: "Внутри Наруто",
      icon: <Channel />,
    },
  ];

  return (
    <ul class="m-7 mt-1 flex flex-col gap-4" style={{ fontFamily: "Manrope" }}>
      {liks.map((link) => (
        <li class="flex items-center gap-2" key={link.href}>
          {link.icon}
          <a target="_blank" class="text-gray-100" href={link.href}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
