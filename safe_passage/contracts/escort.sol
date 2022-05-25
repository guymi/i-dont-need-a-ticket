// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract EscortApp {
    
    uint public app_id;
    string public app_name;
    uint public escortCount = 0;
    mapping(uint => Escort) public escorts;

     constructor(uint _app_id, string memory _app_name) {
        app_id = _app_id;
        app_name = _app_name;
    }

    struct Escort {
        uint  id;
        string event_id;
        string ticket_id;
        string accompanied_id;
        string companion_id;
        string event_name;
        string start_datetime;
        string end_datetime;           
    }

    event EscortCreated (
            // string name,
            uint  id,
            string  event_id,
            string  ticket_id,
            string  accompanied_id,
            string  companion_id,
            address owner
        // uint price,

    );

     function createEscort(string memory event_id, string memory ticket_id, string memory accompanied_id, string  memory companion_id, string memory event_name, string memory start_datetime, string memory end_datetime) public {
        escortCount ++;
        escorts[escortCount] = Escort(escortCount, event_id, ticket_id, accompanied_id, companion_id, event_name, start_datetime, end_datetime);
        emit EscortCreated(escortCount, event_id, ticket_id, accompanied_id, companion_id, msg.sender);
    }

    function getEscortsCount() public view returns  (uint ) {
        return escortCount;
    }

    function getEscortById(uint id) public view returns (Escort memory) {
        return escorts[id];
    }

    function getAllEscorts() public view returns (Escort[] memory) {
        Escort[] memory ret = new Escort[](escortCount);
        for (uint i = 0; i < escortCount; i++) {
            ret[i] = escorts[i];
        }
        return ret;
    }
}
