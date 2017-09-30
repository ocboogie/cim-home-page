import H3 from './H3';
import H4 from './H4';

const list = [H3, H4];

const obj = {};

for (const item of list) {
    obj[item.id] = item;
}
export default obj;