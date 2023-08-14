let url = "http://localhost:3000/"
export default function swDev(){
    let swurl =`{url}/sw.js`
    navigator.serviceWorker.register(swurl).then((res)=>{
        console.log(res)
    });
}