import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import Contact from '../src/components/wip/Contact';
import Features from '../src/components/wip/Features';
import Md from '../src/components/wip/Md';
import Progress from '../src/components/wip/Progress';
import Savry from '../src/components/wip/Savry';
import Ud from '../src/components/wip/Ud';
describe('Smoke tests for /components/wip', () => {
    test('renders Contact without crashing', () => {
        render(_jsx(Contact, {}));
    });
    test('renders Features without crashing', () => {
        render(_jsx(Features, {}));
    });
    test('renders Md without crashing', () => {
        render(_jsx(Md, {}));
    });
    test('renders Progress without crashing', () => {
        render(_jsx(Progress, { progress: 1 }));
    });
    test('renders Savry without crashing', () => {
        render(_jsx(Savry, {}));
    });
    test('renders Ud without crashing', () => {
        render(_jsx(Ud, {}));
    });
});
