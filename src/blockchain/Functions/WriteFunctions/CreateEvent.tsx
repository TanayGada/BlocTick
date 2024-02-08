import { writeContract } from '@wagmi/core'
import { abi } from '../../../abi'
import { config } from '../../../config'



export const CreateEvent = async ({eventName , eventTicketsCount, myEpoch})=>{
    
    

const create = await writeContract(config, {
  abi,
  address: '0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451',
  functionName: 'createEvent',
  args: ['tanay',, [100n],['0'], myEpoch],
  value: '',
  account: '0x37cE4B56d54E1f759CD49748E5F73b45A321958b',
})
return(
    console.log("Event Created Successfully!")
)
}
