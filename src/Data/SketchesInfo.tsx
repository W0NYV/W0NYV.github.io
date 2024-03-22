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

  {title: "<n/a> vol.6", 
  img: "https://pbs.twimg.com/media/GITOpOubUAAYTy0?format=jpg&name=large",
  modalElement: 
  <div>
    <ModalTitle>{'<'}n/a{'>'} vol.6</ModalTitle>
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GJJA4Z0aMAARZIV?format=jpg&name=4096x4096" alt="" /><br />
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GJHYj6mawAAPhNN?format=jpg&name=large" alt="" /><br />
    <div className="mx-8">
      <p className="mt-3 text-white">VRChat上で行われたDJイベント「{'<'}n/a{'>'}」にVJとして出演</p>
      <p className="mt-3 text-white">2024/03</p>
      <ModalLinks links={[
          {title: "<n/a> vol.6", url: "https://x.com/65R4pu47/status/1766764164415098994?s=20"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "RAISE vol.4", 
  img: "https://gyazo.com/fec40f85bdfb8a1ee813353469275e28/max_size/1000",
  modalElement: 
  <div>
    <ModalTitle>RAISE vol.4</ModalTitle>
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GF-Ue8TakAAQbRn?format=jpg&name=4096x4096" alt="" /><br />
    <img className="m-auto w-5/6" src="https://pbs.twimg.com/media/GF5MkHlawAA7gMX?format=jpg&name=4096x4096" alt="" /><br />
    <div className="mx-8">
      <p className="mt-3 text-white">VRChat上で行われたDJイベント「RAISE vol.4」にVJとして出演</p>
      <p className="mt-3 text-white">2024/02</p>
      <ModalLinks links={[
          {title: "RAISE vol.4", url: "https://twitter.com/Ende_VR/status/1752971223565512726?s=20"},
        ]} />
    </div>
    <br /><br />
  </div>},

  {title: "SyntheticSense vol.1", 
  img: "https://sugared-pigment-d10.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa6707f25-2443-44b6-81d5-cbe0980c64fe%2Fss_1.png?table=block&id=99c02aec-541f-4358-a019-ae774878f568&spaceId=e363943f-a317-4488-b1c7-f77210495807&width=2000&userId=&cache=v2",
  modalElement: 
  <div>
    <ModalTitle>SyntheticSense vol.1</ModalTitle>
    <img className="m-auto w-5/6" src="./images/syntheticsense-vol1/SyntheticSense001.webp" alt="" /><br />
    <img className="m-auto w-5/6" src="./images/syntheticsense-vol1/SyntheticSense002.webp" alt="" /><br />
    <img className="m-auto w-5/6" src="./images/syntheticsense-vol1/SyntheticSense003.webp" alt="" /><br />
    <div className="mx-8">
      <p className="mt-3 text-white">VRChat上で行われたDJイベント「SyntheticSense」にVJとして出演</p>
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