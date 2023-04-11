import { GridElementHover } from '../Components/GridElementHover';
import SketchesInfoArr from '../Data/SketchesInfo';
import WorksInfoArr from '../Data/WorksInfo';

type GridElementProps = {
  showModal: Function;
  id: number;
  pageId: number;
};

const GridElement: React.FC<GridElementProps> = (props) => {
  return (
    <div className="w-40 h-40 lg:w-80 lg:h-80 relative" onClick={() => props.showModal(props.id)}>
      <img className="object-cover w-40 h-40 lg:w-80 lg:h-80 max-w-none" 
        src={(props.pageId == 0) ? WorksInfoArr[props.id].img : SketchesInfoArr[props.id].img} 
        alt={(props.pageId == 0) ? WorksInfoArr[props.id].title : SketchesInfoArr[props.id].title} 
      />
      <GridElementHover>
        <p className="text-white sticky top-1/2 left-1/2 text-center">
          {(props.pageId == 0) ? WorksInfoArr[props.id].title : SketchesInfoArr[props.id].title}
        </p>
      </GridElementHover>
    </div>
  );
};

export default GridElement;