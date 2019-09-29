import service from './request'
export function getPersonInfo(){
    return service({
      url: '/example_copy/mock',
      method: 'get'
    })
  }
//   export const getPersonInfo = () => {
//     return service({
//         url: '/api/purchase/countCommitNum',
//         method: 'get',
//     })
// };
