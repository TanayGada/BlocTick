// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Wallet {
    // Mapping to store balances of addresses
    address public contractEventsAddress;
    mapping(address => uint) internal _balance;
    event DepositEvent(address indexed account, uint amount);

    // Function to deposit funds into the wallet
    function deposit() public payable {                 
        _balance[msg.sender] += msg.value;          //
        emit DepositEvent(msg.sender, msg.value);
    }

    event WithdrawEvent(address indexed account, uint amount);

    // Function to withdraw funds from the wallet
    function withdraw(uint amount) public {
        require(_balance[msg.sender] >= amount, "Insufficient Amount");
        _balance[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit WithdrawEvent(msg.sender, amount);
    }

    // Function to check the balance of the caller
    function checkBalance() public view returns (uint) {
        return _balance[msg.sender];
    }

    // Function to check the balance of a specific address (internal use)
    function checkBalance(address add) internal view returns (uint) {
        return _balance[add];
    }

    event TransferEvent(address indexed from, address indexed to, uint amount);

    // Function to transfer funds from the caller to another address (internal use)
    function transfer(address add, uint amount) internal {
        require(_balance[msg.sender] >= amount, "Insufficient Amount");
        _balance[msg.sender] -= amount;
        _balance[add] += amount;
        emit TransferEvent(msg.sender, add, amount);
    }

    // Function to transfer funds between addresses (internal use)
    function transferOneToAnother(
        address add1,
        address add2,
        uint amount
    ) internal {
        require(_balance[add1] >= amount, "Insufficient Amount");
        _balance[add1] -= amount;
        _balance[add2] += amount;
    }

    function setContractEventsAddress(address _contractEvents) public {
        contractEventsAddress = _contractEvents;
    }
}

contract ContractEvents is Wallet {
    // Struct defining an event
    struct Events {
        string name;
        uint date;
        address payable organizer;
        uint[] price;
        uint[] tickets;
        string[] seatType;
        uint[] ticketsLeft;
    }

    // Struct defining address and ticket information of a event
    struct AddressUintPair {
        address payable addr;
        string[] ticketType;
        uint[] ticketCount;
    }

    // Mapping to store events
    mapping(string => Events) public events;

    // Mapping to store customers and their ticket information for each event
    mapping(string => AddressUintPair[]) public customers;

    event CreateEvent(string name, uint date, address organizer);

    // Function to create an event
    function createEvent(
        string memory name,
        uint[] memory price,
        uint[] memory tickets,
        string[] memory seatType,
        uint date
    ) external {
        // Validation checks for creating an event
        require(date > block.timestamp, "Input a future date");
        require(
            tickets.length > 0,
            "At least there should be 1 type of tickets"
        );
        require(
            tickets.length == seatType.length,
            "Enter equal amount of seat types and the respective tickets"
        );
        for (uint i = 0; i < tickets.length; i++) {
            require(
                tickets[i] >= 10 && price[i] > 0,
                "Error in the amount/price of the ticket"
            );
        }
        require(events[name].date == 0);
        events[name] = Events(
            name,
            date,
            payable(msg.sender),
            price,
            tickets,
            seatType,
            tickets
        );
        _balance[msg.sender] += 0;
        emit CreateEvent(name, date, msg.sender);
    }

    // Function to discard an event
    event DiscardEvent(
        string name,
        address indexed organizer,
        uint date,
        uint totalRefunded
    );

    function discardEvent(string memory name, uint date) external {
        // Validation checks before discarding an event
        require(date <= block.timestamp, "Input a future date");
        require(events[name].date != 0, "Event does not exist");
        require(
            events[name].organizer == payable(msg.sender),
            "You cannot discard the event as you are not the owner"
        );
        uint len = events[name].price.length;
        uint[] memory price = events[name].price;
        // Refunding customers for the discarded event
        for (uint i = 0; i < customers[name].length; i++) {
            address payable current = customers[name][i].addr;
            uint prices = 0;
            for (uint j = 0; j < len; j++) {
                uint ticketCounts = customers[name][i].ticketCount[j];
                prices += ticketCounts * price[j];
            }
            transfer(current, prices);
            emit DiscardEvent(name, msg.sender, date, prices);
        }
    }

    event DeleteEvent(string name, address indexed organizer, uint date);

    // Function to delete an event
    function deleteEvent(string memory name, uint date) external {
        require(date > block.timestamp, "Input a future date");
        require(events[name].date != 0, "Event does not exist");
        require(
            events[name].organizer == payable(msg.sender),
            "You cannot delete the event as you are not the owner"
        );
        emit DeleteEvent(name, msg.sender, date);
        delete customers[name];
        delete events[name];
    }

    event BuyTicketsEvent(string name, address indexed buyer, uint totalAmount);

    // Function for customers to buy tickets for an event
    function buyTickets(
        string memory name,
        string[] memory ticketsType,
        uint[] memory ticketsCount,
        uint date
    ) public {
        require(events[name].date != 0, "Event does not exist");
        require(events[name].date > date, "The event has already occured");

        // Validation checks for buying tickets
        for (uint i = 0; i < customers[name].length; i++) {
            require(
                customers[name][i].addr != payable(msg.sender),
                "You can only book tickets once through an account"
            );
        }
        uint total;
        for (uint i = 0; i < ticketsType.length; i++) {
            total += (events[name].price[i] * ticketsCount[i]);
        }
        require(
            checkBalance(msg.sender) >= total,
            "Insufficient funds in the wallet"
        );
        for (uint i = 0; i < ticketsType.length; i++) {
            events[name].ticketsLeft[i] -= ticketsCount[i];
        }
        customers[name].push(
            AddressUintPair(payable(msg.sender), ticketsType, ticketsCount)
        );
        transfer(events[name].organizer, total);
        emit BuyTicketsEvent(name, msg.sender, total);
    }

    event CustomerInfoEvent(
        string eventName,
        address customerAddress,
        string[] ticketType,
        uint[] ticketCount
    );

    // Function for customers to view their ticket information for an event
    function customerInfo(
        string memory name
    ) public view returns (string[] memory, uint[] memory) {
        require(events[name].date != 0, "No such event exists");

        for (uint i = 0; i < customers[name].length; i++) {
            if (customers[name][i].addr == payable(msg.sender)) {
                //put emit here for customerinfoevent

                return (
                    customers[name][i].ticketType,
                    customers[name][i].ticketCount
                );
            }
        }
        require(false, "No such customer is present");
        string[] memory notfound1;
        uint[] memory notfound2;
        return (notfound1, notfound2);
    }

    event SellToOwnerEvent(string name, address indexed seller, uint amount);

    // Function for customers to sell their tickets back to the event organizer
    function sellToOwner(string memory name, uint date) external {
        require(events[name].date != 0, "Event does not exist");
        require(
            events[name].date > date,
            "Event has already occured, cant refund now"
        );
        AddressUintPair storage current = customers[name][0];
        uint flag = 0;
        for (uint i = 0; i < customers[name].length; i++) {
            if (customers[name][i].addr == payable(msg.sender)) {
                current = customers[name][i];
                flag = 1;
            }
        }
        require(flag == 1, "You are not a customer of this event");
        uint prices;
        for (uint j = 0; j < events[name].price.length; j++) {
            prices += (events[name].price[j] * current.ticketCount[j]);
            events[name].ticketsLeft[j] += current.ticketCount[j];
            current.ticketCount[j] = 0;
        }
        transferOneToAnother(events[name].organizer, msg.sender, prices);
        emit SellToOwnerEvent(name, msg.sender, prices);
    }

    event SellPeerToPeerEvent(
        string name,
        address indexed seller,
        address indexed buyer,
        uint[] ticketIndices,
        uint totalAmount
    );

    // Function for customers to sell tickets to other customers
    function sellPeerToPeer(
        string memory name,
        address buyer,
        uint date
    ) external {
        require(events[name].date != 0, "Event does not exist");
        require(
            date < events[name].date,
            "The event has occured and now you cant transfer the tickets"
        );

        uint sellerIndex;
        for (uint i = 0; i < customers[name].length; i++) {
            if (customers[name][i].addr == msg.sender) {
                sellerIndex = i;
                break;
            }
        }

        // Check if the seller has tickets for the event
        require(
            customers[name][sellerIndex].addr == msg.sender,
            "You do not have tickets for this show, violating rules"
        );

        // Check if the buyer has an account in the wallet
        require(
            checkBalance(buyer) > 0,
            "Buyer does not have an account in the wallet"
        );

        // Calculate the total amount for the tickets being sold
        uint totalAmount;
        for (uint j = 0; j < events[name].price.length; j++) {
            totalAmount +=
                events[name].price[j] *
                customers[name][sellerIndex].ticketCount[j];
        }

        // Transfer funds from the buyer to the seller
        transferOneToAnother(buyer, msg.sender, totalAmount);

        // Transfer tickets and data to the buyer
        customers[name].push(
            AddressUintPair(
                payable(buyer),
                customers[name][sellerIndex].ticketType,
                customers[name][sellerIndex].ticketCount
            )
        );

        // Emit the event
        emit SellPeerToPeerEvent(
            name,
            msg.sender,
            buyer,
            events[name].tickets,
            totalAmount
        );

        // Delete the seller from the customers
        delete customers[name][sellerIndex];
    }
}