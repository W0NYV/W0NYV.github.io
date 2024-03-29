import OneWord from './OneWord';

function About() {

  return (
    <div className="About">
      
      <div className="mt-10 flex flex-col lg:flex-row lg:justify-center lg:space-x-20">
        <img src="./w0nyv_kani.jpg" alt="W0NYV-icon" className="rounded-full w-40 h-40 lg:w-auto lg:h-auto m-auto lg:m-0" />      

        <div className="m-auto mt-3 lg:m-0 lg:mt-12">
          <p className="text-2xl text-white">W0NYV（読み：をにゅ）</p>
          <p className="mt-3 text-white">主にUnityを触ってます。</p>
          <p className="text-white">興味：リアルタイムCG, VJ, ライブ演出</p>
          <OneWord />

          <div className="flex space-x-6 justify-center mt-8">

            <a href="https://twitter.com/W0NYV" target="_blank" className="mt-1 mr-2.5">
              <img width={48} src="./images/icons/X_logo_2023.svg" alt="twitter" />
            </a>

            <a href="https://github.com/W0NYV" target="_blank">
              <img width={48} src="./images/icons/github-mark-white.svg" alt="github" />
            </a>
            
            <a href="https://w0nyv.hatenablog.com" target="_blank" className="-mt-2.5">
              <img width={72} height={72} src="./images/icons/hatenablog-logo.svg" alt="blog" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
