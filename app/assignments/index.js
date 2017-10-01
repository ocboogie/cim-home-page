import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';

const list = [H3, H4, H5, H6];

const obj = {};

for (const item of list) {
    obj[item.id] = item;
}
export default obj;