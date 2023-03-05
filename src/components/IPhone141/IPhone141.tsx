import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './IPhone141.module.css';

interface Props {
  className?: string;
}
/* @figmaId 0:3 */
export const IPhone141: FC<Props> = memo(function IPhone141(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.twerkingBunny1}></div>
        <div className={classes.ellipse1}>
          <Ellipse1Icon className={classes.icon} />
        </div>
        <div className={classes.getStarted}>Get Started</div>
      </div>
      <div className={classes.bUNNYRUNNY}>BUNNY RUNNY</div>
    </div>
  );
});
