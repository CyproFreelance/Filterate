interface MenuSvgProps {
  openNavigation: boolean;
}

const MenuSvg: React.FC<MenuSvgProps> = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
    >
      <rect
        className="transition-all origin-center"
        y='0'
        width="30"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y='6'
        x={openNavigation ? '-10' : '10'}
        width="30"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;