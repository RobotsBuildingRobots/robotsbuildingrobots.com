import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHammer } from '@fortawesome/free-solid-svg-icons/faHammer';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faSlash } from '@fortawesome/free-solid-svg-icons/faSlash';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons/faPhoneSquare';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';

library.add(faBars,
            faBrain,
            faEnvelope,
            faProjectDiagram,
            faPhoneSquare,
            faQuoteRight,
            faQuoteLeft,
            faSlash,
            faHammer);

dom.watch();
