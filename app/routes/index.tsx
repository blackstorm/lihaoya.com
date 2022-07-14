function Code({ children }: any) {
  return <code className="bg-gray-200 px-2 rounded">{children}</code>
}

function SpaceLogo() {
  return <img className="h-4 inline-block px-1" src="https://www.spacecycle.com/imgs/space_logo.svg" />
}

export default function Index() {
  return (
    <div className="min-h-screen w-full">
      <div className="p-4 md:p-8 space-y-8">

        <div className="mt-8 md:mt-10 flex flex-col space-y-4">
          <img className="h-10 w-10" src="https://cdn.v2ex.com/avatar/683e/f8a4/86595_large.png" alt="" />
          <h1 className="text-4xl font-bold">Hello There 👋🏻</h1>
          <h2 className="text-lg font-bold">I'am Haoya welcome to my website.</h2>
        </div>

        <div className="space-y-1">
          <p className="flex items-center">Now I'm working for a startup company <SpaceLogo /> as Tech Leader.</p>
          <p>Earlier I'm working for <Code>myShape</Code> an AI fitness company until acquisition by <SpaceLogo /></p>
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
