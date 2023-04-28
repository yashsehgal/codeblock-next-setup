
const MainView: React.FunctionComponent = () => {
  return (
    <div className="main-view m-12">
      <h2 className="leading-snug font-semibold text-xl">{"Code Block NextJS Setup"}</h2>
      <p className="leading-6 font-normal text-base text-gray-500 mt-6">
        This is a basic configuration for rendering MDX supported code blocks. Following the steps from <a href="" target="_blank" className="underline text-blue-500">Code blocks, but better — by, Pedro Duarte.</a>
      </p>
      <p className="leading-6 font-normal text-base text-gray-500 mt-6">
        Requires <a href="https://nextjs.org/" target="_blank" className="underline">NextJS</a>, <a href="https://stitches.dev/" target="_blank" className="underline">Stiches</a> and <a href="https://radix-ui.com/" target="_blank" className="underline">Radix.</a>
      </p>
    </div>
  )
};

export default MainView;