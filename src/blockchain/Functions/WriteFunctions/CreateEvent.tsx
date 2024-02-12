import { writeContract } from '@wagmi/core'
import { abi } from '../../../abi'
import { config } from '../../../config'



export const CreateEvent = async ({eventId,eventTicketsPrice, eventTicketsCount, myEpoch})=>{
  
    


const create = await writeContract(config, {
  abi,
  address: '0x34a0286c6cd5aB85F2A376939D97Be4F01b9FC6D',
  functionName: 'createEvent',
  args: [eventId, [eventTicketsPrice], [eventTicketsCount], ['0'], myEpoch],
  value: 0,
  account: '0x37cE4B56d54E1f759CD49748E5F73b45A321958b',
})
return(
    console.log("Event Created Successfully!")
)
}

