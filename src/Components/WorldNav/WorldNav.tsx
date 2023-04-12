import {
  StyledWorldNavHeading,
  StyledWorldNavList,
  StyledWorldNavWrapper,
} from "./worldnav.style";

type NAV_ITEM = {
  title: string;
  id: string;
};

type Props = {
  list: NAV_ITEM[];
  title: string;
  activeSection: string;
  customClass?: string;
};

const WorldNav = ({
  title = "Lore",
  list = [],
  activeSection = "premise",
  customClass = "",
}: Props) => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(`${id}-section`);

    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <StyledWorldNavWrapper className={customClass}>
      <StyledWorldNavHeading className="font-marco capitalize">
        {title}
      </StyledWorldNavHeading>
      <StyledWorldNavList>
        <ul>
          {list.map((nav, index) => (
            <li key={nav.id}>
              <a
                onClick={() => handleClickScroll(nav.id)}
                href="javascript:void(0);"
                className={`font-inter capitalize inline-block ${
                  activeSection === nav.id ? "active" : ""
                }`}
                data-id={nav.id}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </StyledWorldNavList>
    </StyledWorldNavWrapper>
  );
};

export default WorldNav;
