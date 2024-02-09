import { writeContract } from '@wagmi/core'
import { abi } from '../../../abi'
import { config } from '../../../config'



export const CreateEvent = async ({eventName , eventTicketsCount, myEpoch})=>{
    


const create = await writeContract(config, {
  abi,
  address: '0x23Eb585676AeC3B57D22A5752e09103AB9a92eb6',
  functionName: 'createEvent',
  args: [eventName, [100n], [110n], ['0'], myEpoch],
  value: '',
  account: '0x37cE4B56d54E1f759CD49748E5F73b45A321958b',
})
return(
    console.log("Event Created Successfully!")
)
}
