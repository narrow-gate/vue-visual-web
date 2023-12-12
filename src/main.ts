import sum from './utils'

export default class visualSDK {
    result: string | number;
    constructor() {
        this.result = sum(2, 3)
        console.log(this.result, 'hello sdk')
    }
}