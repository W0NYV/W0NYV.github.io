import { GridElementHover } from '../Components/GridElementHover';
import WorksInfoArr from '../Data/WorksInfo';

type GridElementProps = {
  showModal: Function;
  id: number;
};

const GridElement: React.FC<GridElementProps> = (props) => {
  return (
    <div className="w-80 h-80 relative" onClick={() => props.showModal(props.id)}>
    <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
    <GridElementHover>
      <p className="text-white sticky top-1/2 left-1/2 text-center">{WorksInfoArr[props.id].title}</p>
    </GridElementHover>
  </div>
  );
};

export default GridElement;