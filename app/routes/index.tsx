import { useState } from "react";

function Code({ children }: any) {
  return <code className="bg-gray-200 px-2 rounded">{children}</code>
}

function SpaceLogo() {
  return <img className="h-4 inline-block px-1" src="https://www.spacecycle.com/imgs/space_logo.svg" />
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
          <h2 className="text-lg font-bold">I'am Haoya welcome to my website!</h2>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold">First of all</h2>
          <p>The website build with amazing
            <a href="https://remix.run/" className="ml-1 text-red-700 mr-1" target="__blank">Remix</a>
            <a href="https://tailwindcss.com/" className="text-blue-700 mr-1" target="__blank">Tailwindcss</a>
            <a href="https://pnpm.io/" className="text-yellow-700 mr-1" target="__blank">PnPm</a>
            and really really enjoyed!
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold">About me</h2>
          <p className="flex items-center">
            I'am {age} years old born in 1996. Live in Shanghai China.
          </p>
          <p>
            I started coding in highschool, my favorite lang is <Code>Java</Code> I also write lot of <Code>Go</Code> and <Code>kotlin</Code>.
          </p>
          <p>
            I love smoke pipe, pipe make me calm(i'm fairly casual).
          </p>
          <p>
            Hiking is most important thing for me, walk all day and sleeping in the mountains before nightfall. A better itinerary is <a className="text-blue-700" href="https://goo.gl/maps/rTHsxTzTDN5JMnHm7">徽杭古道</a> and <a className="text-blue-700" href="https://goo.gl/maps/EBvPvSPAV7evsb45A">上青古道</a>。
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold">About Job</h2>
          <p className="flex items-center">Now I'm working for a supa cool startup company <SpaceLogo /> as Tech Leader.</p>
          <p>Earlier I coding in <Code>myShape</Code>an AI fitness company and assembled an excellent backend team until acquisition by <SpaceLogo /></p>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold">Side project</h2>
          <p className="flex items-center">Qingjing</p>
          <p className="flex items-center">typetype.io(closed)</p>
          <p className="flex items-center">LoopLoop</p>
          <p className="flex items-center">目价</p>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold">Education</h2>
          <p className="flex items-center"><img className="w-5 h-5 mr-1" src="https://upload.wikimedia.org/wikipedia/zh/thumb/3/37/Zzuli_seal.svg/2560px-Zzuli_seal.svg.png" alt="" /> Zhengzhou University of Light Industry (2014 - 2022)</p>
        </div>

        <div className="space-y-2">
          <h2>You can also find me in here:</h2>
          <a href="https://github.com/blackstorm"></a>
        </div>

        <div className="space-y-1">
          <h2>The website build with amazing frameworks</h2>
          <div>
            <a href="https://tailwindcss.com/" className="text-blue-700 mr-1" target="__blank">Tailwindcss</a>
            <a href="https://remix.run/" className="text-red-700 mr-1" target="__blank">Remix</a>
          </div>

        </div>

      </div>

    </div>
  );
}
