import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import HarrietProfile1 from '../../../images/harriet-1.JPG';
import HarrietProfile2 from '../../../images/harriet-2.JPG';
import HarrietProfile3 from '../../../images/harriet-3.JPG';
import HarrietProfile4 from '../../../images/harriet-4.JPG';

export default () => (
    <Carousel showIndicators dynamicHeight={true} autoPlay={false} showStatus={false} showThumbs={false}>
        <div>
            <img src={HarrietProfile1} />
        </div>
        <div>
            <img src={HarrietProfile2} />
        </div>
        <div>
            <img src={HarrietProfile3} />
        </div>
        <div>
            <img src={HarrietProfile4} />
        </div>
    </Carousel>
)