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

  {title: "5H1V3R1N6", 
  img: "https://img.youtube.com/vi/UdCPXLAD9NY/maxresdefault.jpg",
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
  </div>},

  {title: "Opening", 
  img: "http://img.youtube.com/vi/ZJhnxB1w1IE/hqdefault.jpg",
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
  </div>}
];

export default WorksInfoArr;