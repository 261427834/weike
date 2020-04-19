
import Api from "../src/api/api"
const api = new Api({baseURL:''});

const sum = require('./sum')

beforeAll(()=>{
    //测试前需要做的
})

describe("模块描述",()=>{
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

