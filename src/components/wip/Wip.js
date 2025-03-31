import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Contact from './Contact';
import Features from './Features';
import Md from './Md';
import Progress from './Progress';
import Savry from './Savry';
import Ud from './Ud';
const Wip = () => {
    return (_jsxs("div", { className: 'bg-[#EAEDE5] min-h-screen flex flex-col', children: [_jsx(Ud, {}), _jsx(Md, {}), _jsx(Progress, { progress: 1 }), _jsx(Features, {}), _jsx(Savry, {}), _jsx(Contact, {})] }));
};
export default Wip;
