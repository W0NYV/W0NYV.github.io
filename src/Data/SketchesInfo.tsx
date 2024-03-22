import React from 'react';
import ModalTitle from '../Components/ModalTitle'
import YouTubeEmbed from '../Components/YouTubeEmbed';
import ModalLinks from '../Components/ModalLinks';

type WorksInfo = {
  title : string;
  img : string;
  modalElement : React.ReactNode;
}

const SketchesInfoArr: WorksInfo[] = [

  {title: "SyntheticSense vol.1", 
  img: "./images/syntheticsense-vol1/SyntheticSense001.webp",
  modalElement: 
  <div>
    <ModalTitle>SyntheticSense vol.1</ModalTitle>
    <img className="m-auto w-5/6" src="./images/syntheticsense-vol1/SyntheticSense001.webp" alt="" />
    <img className="m-auto w-5/6" src="./images/syntheticsense-vol1/SyntheticSense002.webp" alt="" />
    <img className="m-auto w-5/6" src="./images/syntheticsense-vol1/SyntheticSense003.webp" alt="" />
    <div className="mx-8">
      <p className="mt-3 text-white">九州に旅行に行ったので、VJに使った。</p>
      <p className="mt-3 text-white">Tool: TouchDesigner, Blender</p>
      <p className="mt-3 text-white">2023</p>
      <ModalLinks links={[
          {title: "SyntheticSense vol.1", url: "https://sugared-pigment-d10.notion.site/SyntheticSense-vol-1-ddbd606af4184e3f8fd96d1f943c7d9e"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "w0nyv VJ Footage AKA", 
  img: "./images/vjpackaka.webp",
  modalElement: 
  <div>
    <ModalTitle>w0nyv VJ Footage AKA</ModalTitle>
    <img className="m-auto w-5/6" src="./images/vjpackaka.webp" alt="vjpackaka" />
    <div className="mx-8">
      <p className="mt-3 text-white">赤いVJ素材</p>
      <p className="mt-3 text-white">Tool: Adobe After Effects, Blender</p>
      <p className="mt-3 text-white">2022</p>
    </div>
    <br /><br />
  </div>},

  {title: "DosShrimp VJ Footage vol.1", 
  img: "./images/vjpack.webp",
  modalElement: 
  <div>
    <ModalTitle>DosShrimp VJ Footage vol.1</ModalTitle>
    <YouTubeEmbed id="PrmrXh74FYA" />
    <div className="mx-8">
      <p className="mt-3 text-white">シンプルなVJ素材</p>
      <p className="mt-3 text-white">Tool: Adobe After Effects</p>
      <p className="mt-3 text-white">2022</p>
      <ModalLinks links={[
          {title: "DosShrimp VJ Footage vol.1 - をにゅ市場 - BOOTH", url: "https://dosshrimp.booth.pm/items/3678997"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "1K3G4M3X", 
  img: "./images/ikegame.webp",
  modalElement: 
  <div>
    <ModalTitle>1K3G4M3X</ModalTitle>
    <img className="m-auto w-5/6" src="https://user-images.githubusercontent.com/15060080/212593531-d5378362-fbdf-404e-93e2-f2bdb5a2b5c8.gif" alt="1K3G4M3X" />
    <img className="m-auto w-5/6" src="https://user-images.githubusercontent.com/15060080/212593537-1a320219-cd25-472d-9514-ddfeeaeb8fa6.gif" alt="1K3G4M3X" />
    <div className="mx-8">
      <p className="mt-3 text-white">人物切り抜き生カメエフェクトツール</p>
      <p className="mt-3 text-white">Tool: Unity, SelfieSegmentationBarracuda</p>
      <p className="mt-3 text-white">2023</p>
    </div>
    <br /><br />
  </div>},

  {title: "nanokon2-setup", 
  img: "./images/nanokon2.webp",
  modalElement: 
  <div>
    <ModalTitle>nanokon2-setup</ModalTitle>
    <img className="m-auto h-5/6" src="https://user-images.githubusercontent.com/15060080/210543288-45508b9e-0784-4f06-b6e1-e76c017e96fc.gif" alt="nanokon2" />
    <div className="mx-8">
      <p className="mt-3 text-white">Unity用のKORG nanoKontrol2セットアップツール</p>
      <p className="mt-3 text-white">Tool: Unity, UniRx, Input System</p>
      <p className="mt-3 text-white">2023</p>
      <ModalLinks links={[
          {title: "楽にnanoKONTROL2をUnityで動かすためのセットアップツールをつくった", url: "https://w0nyv.hatenablog.com/entry/2023/01/05/015949"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "nyvvvv-gl", 
  img: "./images/shaderEditor.webp",
  modalElement: 
  <div>
    <ModalTitle>nyvvvv-gl</ModalTitle>
    <img className="m-auto h-5/6" src="./images/shaderEditor.gif" alt="ShaderEditor" />
    <div className="mx-8">
      <p className="mt-3 text-white">WebGL製のシェーダエディタ</p>
      <p className="mt-3 text-white">Tool: WebGL</p>
      <p className="mt-3 text-white">2022</p>
    </div>
    <br /><br />
  </div>},

  {title: "tanabata", 
  img: "./images/tanabata.webp",
  modalElement: 
  <div>
    <ModalTitle>tanabata</ModalTitle>
    <img className="m-auto w-5/6" src="./images/tanabata.webp" alt="tanabata" />
    <div className="mx-8">
      <p className="mt-3 text-white">短冊に願いを書いて笹に付けるWebページ</p>
      <p className="mt-3 text-white">Tool: p5js, GAS</p>
      <p className="mt-3 text-white">2020</p>
      <ModalLinks links={[
          {title: "tanabata", url: "https://w0nyv.github.io/tanabata/"},
        ]} />
    </div>
    <br /><br />
  </div>},
];

export default SketchesInfoArr;