import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHammer } from '@fortawesome/free-solid-svg-icons/faHammer';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';

library.add(faBars,
            faBrain,
            faEnvelope,
            faProjectDiagram,
            faHammer);

dom.watch();
