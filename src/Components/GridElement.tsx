import { GridElementHover } from '../Components/GridElementHover';
import WorksInfoArr from '../Data/WorksInfo';

type GridElementProps = {
  showModal: Function;
  id: number;
};

const GridElement: React.FC<GridElementProps> = (props) => {
  return (
    <div className="w-40 h-40 lg:w-80 lg:h-80 relative" onClick={() => props.showModal(props.id)}>
      <img className="object-cover w-40 h-40 lg:w-80 lg:h-80 max-w-none" src={WorksInfoArr[props.id].img} alt={WorksInfoArr[props.id].title} />
      <GridElementHover>
        <p className="text-white sticky top-1/2 left-1/2 text-center">{WorksInfoArr[props.id].title}</p>
      </GridElementHover>
  </div>
  );
};

export default GridElement;