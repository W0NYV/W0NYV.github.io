import React from 'react';
import ModalTitle from '../Components/ModalTitle'
import YouTubeEmbed from '../Components/YouTubeEmbed';
import ModalLinks from '../Components/ModalLinks';

type WorksInfo = {
  title : string;
  img : string;
  modalElement : React.ReactNode;
}

const WorksInfoArr: WorksInfo[] = [

  {title: "draw();",
  img: "./draw.png",
  modalElement: 
  <div>
    <ModalTitle>draw();</ModalTitle>
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GHUozJcbQAAGf2C?format=jpg&name=large" alt="draw();-3" /><br />
    <img className="m-auto w-5/6" src="./images/draw-_2-3.webp" alt="draw();-_2-3" /><br />
    <img className="m-auto w-5/6" src="./images/draw-1.webp" alt="draw();-1" /><br />
    <div className="mx-8">
      <p className="mt-3 text-white">　主催を行っているオーディオとビジュアルのパフォーマンスのライブイベント。リアルでもバーチャルでも行っている。</p>
      <ModalLinks links={[
          {title: "公式サイト", url: "https://function-draw.com/"},
          {title: "公式Twitter", url: "https://twitter.com/function_draw"},
          {title: "#function_draw", url: "https://twitter.com/search?q=%23function_draw&src=typed_query"},
        ]} />
    </div>
    <br /><br />
  </div>},

{title: "𝗰𝘃𝗲𝗹 × W0NYV - SENSE//SENSE", 
img: "https://gyazo.com/dafd9eac3de4d43546a6d6760d7f3bdb/max_size/1000",
modalElement: 
<div>
  <ModalTitle>𝗰𝘃𝗲𝗹 × W0NYV - SENSE//SENSE</ModalTitle>
  <YouTubeEmbed id="OwoLSMbWCTE" />
  <div className="mx-8">
    <p className="mt-3 text-white">「SENSE//SENSE」で使用、開発したVJ tool</p>
    <ModalLinks links={[
        {title: "𝗰𝘃𝗲𝗹", url: "https://twitter.com/Cvelz"},
      ]} />
  </div>
  <br /><br />
</div>},

  {title: "3G0D34TH", 
  img: "https://gyazo.com/35d88feee2d3084fa4f305892667d019/max_size/1000",
  modalElement: 
  <div>
    <ModalTitle>3G0D34TH</ModalTitle>
    <YouTubeEmbed id="Nh5IezxI5zo" />
    <img className="m-auto w-5/6" src="https://gyazo.com/8a2f22ff7ea8ed90fdc899d6329bbdee/max_size/1000" alt="3G0D34TH - 1" /><br />
    <img className="m-auto w-5/6" src="https://gyazo.com/791eadd95b9db0963b81952053ffb11c/max_size/1000" alt="3G0D34TH - 2" /><br />
    <img className="m-auto w-5/6" src="https://gyazo.com/26c854f8578cfb044cd911fe024f8c3f/max_size/1000" alt="3G0D34TH - 3" /><br />
    <div className="mx-8">
      <p className="mt-3 text-white">「draw{'('}tokyo{')'};」で使用、開発したVJ tool</p>
      <ModalLinks links={[
          {title: "draw(tokyo);", url: "https://draw-tokyo.peatix.com/"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "draw(tokyo);", 
  img: "https://gyazo.com/c9a3322c02134820251809f9a5f8103c/max_size/1000",
  modalElement: 
  <div>
    <ModalTitle>draw(tokyo);</ModalTitle>
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GHFaQ1_aMAATtLq?format=jpg&name=large" alt="draw(tokyo); - 1" /><br />
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GHFKtT2aoAA9TM4?format=jpg&name=4096x4096" alt="draw(tokyo); - 2" /><br />
    <div className="mx-8">
      <p className="mt-3 text-white">CIRCUS TOKYOにてイベントを主催。</p>
      <ModalLinks links={[
          {title: "draw(tokyo);", url: "https://draw-tokyo.peatix.com/"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "十五少女 1st ONLINE LIVE 「SILENTHATED」", 
  img: "./images/15sj-1st/15sj-1st.webp",
  modalElement: 
  <div>
    <ModalTitle>十五少女 1st ONLINE LIVE 「SILENTHATED」</ModalTitle>
    <img className="m-auto w-5/6" src="./images/15sj-1st/ash.webp" alt="15sj-1st-2" /><br />
    <img className="m-auto w-5/6" src="./images/15sj-1st/touhikou.webp" alt="15sj-1st-3" /><br />
    <img className="m-auto w-5/6" src="./images/15sj-1st/hms.webp" alt="15sj-1st-4" /><br />
    <img className="m-auto w-5/6" src="./images/15sj-1st/htr.webp" alt="15sj-1st-5" />
    <div className="mx-8">
      <p className="mt-3 text-white">　BRDGプロデュースの下、「アッシュ」、「逃避行」、「ハンドメイド流星雨」、「春とレム」の演出全般を担当した。</p>
      <ModalLinks links={[
          {title: "十五少女 OFFICIAL SITE", url: "https://15sj.xyz/"},
          {title: "十五少女 1st ONLINE LIVE「SILENTHATED」", url: "https://www.zan-live.com/live/detail/10280"},
          {title: "BRDG / VRDG (@tokyomax) / Twitter", url: "https://twitter.com/tokyomax"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "Aurora", 
  img: "./images/draw3/draw3-2.webp",
  modalElement: 
  <div>
    <ModalTitle>Aurora</ModalTitle>
    <img className="m-auto w-5/6" src="./images/draw3/draw3-1.webp" alt="draw(); #3-1" /><br />
    <img className="m-auto w-5/6" src="./images/draw3/draw3-2.webp" alt="draw(); #3-2" /><br />
    <img className="m-auto w-5/6" src="./images/draw3/draw3-3.webp" alt="draw(); #3-3" /><br />
    <img className="m-auto w-5/6" src="./images/draw3/draw3-4.webp" alt="draw(); #3-4" />
    <div className="mx-8">
      <p className="mt-3 text-white">　<a href="https://twitter.com/SainaKey" className="text-teal-300 hover:text-teal-600">@SainaKey</a>と共同開発を行ったVJツール。遠隔で操作することもでき、draw(); #3当日はオンラインB2Bを行った。</p>
      <ModalLinks links={[
          {title: "draw(); #3", url: "https://twitter.com/SainaKey/status/1679078181775757312?s=20"},
          {title: "【自作VJソフト】オンラインB2BジェネVJツールを作った話", url: "https://note.com/sainakey5/n/n2e7a402ca535"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "5H1V3R1N6", 
  img: "./shiba.png",
  modalElement: 
  <div>
    <ModalTitle>5H1V3R1N6</ModalTitle>
    <YouTubeEmbed id="UdCPXLAD9NY" />
    <div className="mx-8">
      <p className="mt-3 text-white">　VJツール。128枚の板ポリを軽量に描画するためにGPUインスタンシング、取り付けるだけでMIDI信号を受け取り関数を実行するコンポーネントなどを実装した。</p>
      <p className="mt-3 text-white">開発ツール: Unity (C#, ShaderLab, UniRx)</p>
      <p className="text-white">開発期間: 14日間</p>
      <p className="text-white">開発時期: 大学3年</p>
      <ModalLinks links={[
          {title: "GitHub - W0NYV/5H1V3R1N6: VJ Tool for draw(); #2", url: "https://github.com/W0NYV/5H1V3R1N6"},
          {title: "draw(); #2にてVJを行った", url: "https://w0nyv.hatenablog.com/entry/2023/02/01/143136"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "Opening", 
  img: "./opening.png",
  modalElement: 
  <div>
    <ModalTitle>Opening</ModalTitle>
    <YouTubeEmbed id="ZJhnxB1w1IE" />
    <div className="mx-8">
      <p className="mt-3 text-white">　VRChat上で行われたLIVE配信イベント「draw();」にてVJを行うために、MIDIコントローラからの信号を受け取り、シーン上のオブジェクトやカメラワーク、マテリアルなどが変化するアプリケーションを開発した。DJさんから事前に最後に雨がテーマになっている曲を流すという情報を頂いたので、雨を表現したパーティクルを作成した。</p>
      <p className="mt-3 text-white">開発ツール: Unity (C#, Shader Graph, VFX Graph)</p>
      <p className="text-white">開発期間: 17日間</p>
      <p className="text-white">開発時期: 大学3年</p>
    </div>
    <br /><br />
  </div>},

  {title: "Re:NKON", 
  img: "./renkon.png",
  modalElement: 
  <div>
    <ModalTitle>Re:NKON</ModalTitle>
    <img className="m-auto w-5/6" src="./renkon.gif" alt="Re:NKON" />
    <div className="mx-8">
      <p className="mt-3 text-white">　unityroom主催のUnity1週間ゲームジャムに投稿した作品。銃に見立てたレンコンを交互に打ち合い、スコア稼いでいくマルチプレイオンラインゲーム。4人のメンバーで制作を行い、私は主にネットワーク周りとゲームロジックを担当した。特にユーザのあらゆる行動(ゲーム中に切断するなど)が起きてもゲームに不具合がないようにハンドリングをしたことに気合いを入れた。また、ゲームのプレイ人数が足りないときの解決策としてCPUの実装を行った。</p>
      <p className="mt-3 text-white">開発ツール: Unity (C#, Monobit Unity Networking 2.0)</p>
      <p className="text-white">開発期間: 一週間</p>
      <p className="text-white">開発時期: 大学3年</p>
      <ModalLinks links={[
          {title: "【オンライン】Re:NKON(PCのみプレイ可)", url: "https://unityroom.com/games/renkon"},
        ]} />
    </div>
    <br /><br />
  </div>},

  // {title: "Dummy", 
  // img: "./w0nyv.jpg",
  // modalElement: 
  // <div>
  // </div>},

];

export default WorksInfoArr;