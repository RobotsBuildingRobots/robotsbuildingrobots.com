import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faDirections } from '@fortawesome/free-solid-svg-icons/faDirections';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons/faHandHoldingHeart';

library.add(faBars,
  faEnvelope,
  faDirections,
  faProjectDiagram,
  faDollarSign,
  faHandHoldingHeart,
  faThumbsUp);

dom.watch();
