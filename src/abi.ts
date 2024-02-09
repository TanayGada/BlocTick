export const abi = [
  
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'name',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'buyer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalAmount',
          type: 'uint256',
        },
      ],
      name: 'BuyTicketsEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'name',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'organizer',
          type: 'address',
        },
      ],
      name: 'CreateEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eventName',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'customerAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'ticketType',
          type: 'string[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'ticketCount',
          type: 'uint256[]',
        },
      ],
      name: 'CustomerInfoEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'name',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'organizer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
      ],
      name: 'DeleteEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'DepositEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'name',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'organizer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalRefunded',
          type: 'uint256',
        },
      ],
      name: 'DiscardEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'name',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'seller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'SellToOwnerEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'TransferEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'WithdrawEvent',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'name', type: 'uint256' },
        { internalType: 'string[]', name: 'ticketsType', type: 'string[]' },
        { internalType: 'uint256[]', name: 'ticketsCount', type: 'uint256[]' },
        { internalType: 'uint256', name: 'date', type: 'uint256' },
      ],
      name: 'buyTickets',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'checkBalance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'contractEventsAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'name', type: 'uint256' },
        { internalType: 'uint256[]', name: 'price', type: 'uint256[]' },
        { internalType: 'uint256[]', name: 'tickets', type: 'uint256[]' },
        { internalType: 'string[]', name: 'seatType', type: 'string[]' },
        { internalType: 'uint256', name: 'date', type: 'uint256' },
      ],
      name: 'createEvent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'name', type: 'uint256' }],
      name: 'customerInfo',
      outputs: [
        { internalType: 'string[]', name: '', type: 'string[]' },
        { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      name: 'customers',
      outputs: [
        { internalType: 'address payable', name: 'addr', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'name', type: 'uint256' },
        { internalType: 'uint256', name: 'date', type: 'uint256' },
      ],
      name: 'deleteEvent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'deposit',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'name', type: 'uint256' },
        { internalType: 'uint256', name: 'date', type: 'uint256' },
      ],
      name: 'discardEvent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'events',
      outputs: [
        { internalType: 'uint256', name: 'name', type: 'uint256' },
        { internalType: 'uint256', name: 'date', type: 'uint256' },
        { internalType: 'address payable', name: 'organizer', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'name', type: 'uint256' },
        { internalType: 'uint256', name: 'date', type: 'uint256' },
      ],
      name: 'sellToOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_contractEvents', type: 'address' },
      ],
      name: 'setContractEventsAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
      name: 'withdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },

] as const

