import React from 'react';
import { ScrollLink, scroller } from 'react-scroll';

const Scroll = ({ children, to, smooth = true, duration = 500, offset = -70 }) => (
  <ScrollLink
    to={to}
    smooth={smooth}
    duration={duration}
    offset={offset}
    spy={true}
    activeClass="active"
    className="scroll-link"
    onClick={() => scroller.scrollTo(to, { smooth, duration, offset })}
  >
    {children}
  </ScrollLink>
);

export default Scroll;