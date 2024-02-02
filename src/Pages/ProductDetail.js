import {useRef} from 'react';
export default function ProductDetail() {
  const ref = useRef(null);
  const handleClick = () => {
ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
<div>
<button onClick={handleClick}>Scroll to element</button>
<div style={{height: '155rem'}} />
<div ref={ref}>
    
</div>
<div style={{height: '155rem'}} />
</div>
  );
}