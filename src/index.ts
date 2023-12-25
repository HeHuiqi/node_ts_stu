
import axios from "axios";
import { createWallet } from "./util"

async function main() {
    let wallet = createWallet('btc');
    console.log('wallet:',wallet);

    let rsp = await axios.get('https://www.baidu.com');
    console.log('rsp:',rsp);
}
main()