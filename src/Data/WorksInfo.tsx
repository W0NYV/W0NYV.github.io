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
    <img className="m-auto w-5/6" src="./images/draw-1.webp" alt="draw();-1" />
    <img className="m-auto w-5/6" src="./images/draw-3.webp" alt="draw();-3" />
    <img className="m-auto w-5/6" src="./images/draw-_2-3.webp" alt="draw();-_2-3" />
    <div className="mx-8">
      <p className="mt-3 text-white">　主催を行っているオーディオとビジュアルのパフォーマンスのライブイベント。ビジュアルにフォーカスしたオンラインのイベントが現状ほぼなく、自分たちでやってみようとなり、始まった企画。主に主催の仕事として、ブッキング、運営メンバーの仕事割り振り、公式サイト制作、ゲスト出演者の方がVRChatでライブを行うためのサポートを行っている。これまでに、VRChatとTwitchにて配信を行い、前回のイベントでは、同時視聴者数は約80人ほどであった。</p>
      <ModalLinks links={[
          {title: "公式サイト", url: "https://sites.google.com/view/function-draw/home"},
          {title: "#function_draw", url: "https://twitter.com/search?q=%23function_draw&src=typed_query"},
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
  </div>}
];

export default WorksInfoArr;