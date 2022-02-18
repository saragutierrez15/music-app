

import { URL_BASE } from "../services/endPoints";


export const getData = async (url?:string) => {

//   const resp = await fetch (`${URL_BASE}${url}`);
//   const data = await resp.json();
//   const launch = data.map((item:any) =>{
//     return {
//       name: item.name,
//       date:item.date_local,
//       launchpad: item.launchpad,
//       id:item.id,
//       img:item.links.patch.small
//     }
//   }) 
//  return launch


const resp = await fetch (`${URL_BASE}${url}`);
const data = await resp.json();

return data
};