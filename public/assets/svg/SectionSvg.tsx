import React from 'react';
import PlusSvg from './PlusSvg';

interface SectionSvgProps {
  crossesOffset?: boolean;
}

const SectionSvg: React.FC<SectionSvgProps> = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset ? 'crosses-offset' : ''
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset ? 'crosses-offset' : ''
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
