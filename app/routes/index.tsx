import { PropsWithChildren, useState } from "react";
import Code from '~/components/Code';
import MyShapeLogo from "~/components/logos/MyShape";
import SpaceLogo from "~/components/logos/Space";
import LogoZZULI from "~/images/zzuli.png";

type SideProjectProps = {
  name: string;
}

function SideProject({ name, children }: PropsWithChildren<SideProjectProps>) {
  return (
    <div className="space-y-1">
      <h4 className="font-bold">
        {name}
      </h4>
      <div className="text-sm text-gray-800">
        {children}
      </div>
    </div>
  )
}

type BlockProps = {
  name: string;
  space?: number;
}

function Block({ name, children, space = 1 }: PropsWithChildren<BlockProps>) {
  return (
    <div className={`space-y-${space}`}>
      <h3 className="text-lg font-bold">{name}</h3>
      {children}
    </div>
  )
}

export default function Index() {

  const now = new Date();
  const [age, setAge] = useState(now.getFullYear() - 1996);

  return (
    <div className="min-h-screen w-full">
      <div className="p-4 md:p-8 space-y-8">

        <div className="mt-8 md:mt-10 flex flex-col space-y-4">
          <img className="h-10 w-10" src="https://cdn.v2ex.com/avatar/683e/f8a4/86595_large.png" alt="" />
          <h1 className="text-4xl font-bold">Hello There 👋🏻</h1>
          <h2 className="text-lg font-bold">I'm Haoya, welcome to my website!</h2>
        </div>

        <Block name="First of all">
          <p>The website build with amazing
            <a href="https://remix.run/" className="ml-1 text-red-700 mr-1" target="__blank">Remix</a>
            <a href="https://tailwindcss.com/" className="text-blue-700 mr-1" target="__blank">Tailwindcss</a>
            <a href="https://pnpm.io/" className="text-yellow-700 mr-1" target="__blank">PnPm</a>
            and really enjoyed!
          </p>
        </Block>

        <Block name="About me">
          <p>
            I was born in 1996. I am {age} years old. I am a programmer and live in Shanghai, China.
          </p>
          <p>
            I started coding in high school. My favorite programming language is <Code>Java</Code>. I also write a lot of <Code>Go</Code> and <Code>kotlin</Code>.
          </p>
          <p>
            I love smoking pipe. Pipe make me calm(I'm fairly casual).
          </p>
          <p>
            Hiking is most important thing to me. Walk all day and sleep in the mountains before nightfall. The best hiking memories for me are the <a className="text-blue-700" href="https://goo.gl/maps/rTHsxTzTDN5JMnHm7">Hui Hang Ancient Road</a> and <a className="text-blue-700" href="https://goo.gl/maps/EBvPvSPAV7evsb45A">Shang Qing Ancient Road</a>.
          </p>
        </Block>

        <Block name="Work">
          <p>Now I'm working for a supa cool startup company <SpaceLogo /> as a Tech Leader.</p>
          <p>Earlier, I coded for <MyShapeLogo /> an AI fitness company long time. I built and assembled a great back-end architecture and back-end team until it was acquired by <SpaceLogo /> in  2021.</p>
        </Block>

        <Block name="Side project" space={2}>
          <SideProject name="typetype.io(closed)">
            <p>
              TYPETYPE is a blog creator. You can create your own blog on TYPETYPE. It's very lightweight and easy to use.
            </p>
          </SideProject>

          <SideProject name="LoopLoop(closed)">
            <p>LoopLoop(循环英语) can listen to English conversations indefinitely, it runs on Wechat, i built it with my friend in a few weekends. </p>
          </SideProject>

          <SideProject name="目价">
            <p>目价  is a very simple application that displays real-time stock prices on your Mac status bar.</p>
          </SideProject>
        </Block>

        <Block name="Education">
          <p className="flex items-center"><img className="w-5 h-5 mr-1" src={LogoZZULI} alt="" /> Zhengzhou University of Light Industry</p>
        </Block>

        <Block name="Contact me">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAATBAMAAAB8R8JwAAAAG1BMVEX///8AAAB/f38/Pz8fHx9fX1+fn5+/v7/f39+f12ZXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABmElEQVQ4jc2Sz2+CMBSAH2KhR1EEjiVjd3Rk2VEliEc2PexYssuOsCzLjqBs8c9eW5lS9sOYePBdyNc+vr6+PoDLD4WIz8bsTOcyAGiBedtIxaTeb/z3Z3hFkKVUBhw+46fFIUf1TxAusQ1oIsMrFfIThQpRrsyka1gAnZ4EMAZv7qkJeCaFPiB/ZJREwK47yObnmbslazTbmLQWWnoflryCiQTaRL2rIr2HYq0vhLxCAassJQq5z9ixsT4TSwZ14w+nFiZwIxw5lUAlacFS7ZKCuxdywBa/zDUvkCGI/SGUCbZrIWEG5sBRC7IIdBvitIA8+xZyeHPYujJN+LGsw/W+QtvCypehLCzQHXBcVsReyOGlB9hWBvyCTAb1/g8hq0mGcsuuxjpZV6C2KiThkQqrpA0sq/K7VPRoBl0fST0kOW308Bdh2AZEVtvR4xh2D7t1fbSQXlllM49iHNVT0BZqhmE4EugOGqz5bPE5+zAffDzNm3OIhx1nP4cH4T+xYg0C7VjWCdEZvsNnkJ1PCOvACOkZfRcRXzPgbWHv1j5zAAAAAElFTkSuQmCC" alt="" />
        </Block>

      </div>

    </div>
  );
}
