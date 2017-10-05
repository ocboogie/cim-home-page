import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import H7 from './H7';
import H8 from './H8';
import H9 from './H9';
import H10 from './H10';

const list = [H3, H4, H5, H6, H7, H8, H9, H10];

const obj = {};

for (const item of list) {
    obj[item.id] = item;
}

export default obj;
