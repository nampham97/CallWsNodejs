import express from 'express';
import soap from 'soap-as-promised';
const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const url = 'https://10.53.252.201:9443/teamworks/webservices/ST2/dayroi.tws?WSDL';
const args = {name: 'value'};
 

soap.createClient(url)
    .then((client) => client.hello({param: true}))
    .then((result) => console.log(`The result was: ${result}`))
    .catch((error) => console.error(`There was an error! ${error}`));



app.get('/', (req, res) =>{
    res.send('he');
})

const port = 4000;
app.listen(port, () => {
    console.log('Server are running at port ' + port)
})