type GridElementHoverProps = {
  children: React.ReactNode;
};

export const GridElementHover: React.FC<GridElementHoverProps> = (props) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-slate-400 opacity-0 hover:opacity-90">
      {props.children}
    </div>
  );
}
