type Link = {
  title: string,
  url: string
}

type ModalLinksProps = {
  links: Link[]
};

const ModalLinks: React.FC<ModalLinksProps> = (props) => {

  //map使うともっと少なく書ける
  const linkComponents = () => {
    let components: React.ReactNode[] = [];

    let title: string = "";
    let url: string = "";

    for(let i = 0; i < props.links.length; i++) {

      title = props.links[i].title;
      url = props.links[i].url;

      components.push(
                      <a href={url} target="_blank">
                        <li className="text-blue-200 dark:text-blue-200 hover:underline">{title}</li>
                      </a>
                      );
    }

    return components;
  };

  return (
    <div className="ModalLinks">
      <p className="mt-3 text-white">LINKS</p>

      <ul className="list-[square]">
      {
        linkComponents()
      }
      </ul>
    </div>
  );
};

export default ModalLinks;