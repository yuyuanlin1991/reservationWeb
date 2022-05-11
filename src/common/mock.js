
import * as Mock from "mockjs";
const domain = ''
Mock.mock(`${domain}/resTyles`, 'get', {
    code:200,
    data:[],
}); 

export default Mock;
