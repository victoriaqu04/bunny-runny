import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 238 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M237 21.5001C237 40.0017 239.939 42 118.5 42C0 42 0 40.0017 0 21.5001C0 2.99858 0 0.500122 118.5 0.5C237 0.499878 237 2.99858 237 21.5001Z'
      fill='#8BB771'
    />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
