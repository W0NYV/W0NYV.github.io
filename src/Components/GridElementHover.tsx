type GridElementHoverProps = {
  children: React.ReactNode;
};

export const GridElementHover: React.FC<GridElementHoverProps> = (props) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-opacity-40 opacity-100 lg:bg-opacity-0 lg:opacity-0 lg:hover:bg-opacity-60 lg:hover:opacity-100">
      {props.children}
    </div>
  );
};
