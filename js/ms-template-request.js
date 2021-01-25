

// function getTenantId(url) {
//     axios.get('http://serp-test.520mro.com/api/cms/cms-url-relationship/selectByUrl?url='+url,
//         {
//             headers: {'X-Requested-With': 'XMLHttpRequest'},
//             withCredentials:false,
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }


class MsTemplateRequest {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://192.168.1.89:8765/api/',
            timeout: 1000,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Headers": "Origin X-Requested-With, Content-Type, Accept"
            },
        });
    }

    getTenantId(url){
        this.instance.get('/cms/cms-url-relationship/selectByUrl?url='+url).then(function (res) {
            console.log(res)
        })
    }
}
