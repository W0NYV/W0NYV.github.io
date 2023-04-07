import React from 'react';

type WorksInfo = {
  title : string;
  modalElement : React.ReactNode;
}

const WorksInfoArr: WorksInfo[] = [

  {title: "準備中", modalElement: <p>準備中</p>},
  {title: "準備中２", modalElement: <p>準備中２</p>},
  {title: "準備中３", modalElement: <p>準備中３</p>}
];

export default WorksInfoArr;