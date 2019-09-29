// import request from '@/utils/request'
//   export function findAssetsType() {
//     return request({
//       url: '/block/findAssetsType',
//       method: 'get'
//     })
//   }

  import service from './request'
  export const findAssetsType=() =>{
      return service({
        url: '/block/findAssetsType',
        method: 'get'
      })
    }