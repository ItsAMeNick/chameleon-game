import _ from "lodash";

const initialState = {
    player_name: "",
    players: [],
    db_updated: false,
    topics: {},
    session: {
        key: "",
        db_id: ""
    },
    stage: "",
    round: {
        id: 0,
        topic: "",
        role: ""
    },
    voting: {
        voters: [],
        votes: [],
    }
};

const chameleonReducer = (state = initialState, action) => {
    switch (action.type) {
    case "dump_store": {
        console.log(state);
        return state;
    }

    case "set_topics": {
        let newState = _.cloneDeep(state);
        newState.topics = action.payload;
        newState.db_updated = true;
        return newState;
    }

    case "set_session": {
        let newState = _.cloneDeep(state);
        newState.session = action.payload;
        return newState;
    }

    case "set_player": {
        let newState = _.cloneDeep(state);
        newState.player_name = action.payload;
        return newState;
    }

    case "update_game": {
        let newState = _.cloneDeep(state);
        newState.stage = action.payload.stage;
        newState.players = action.payload.players;
        newState.round.id = action.payload.round.id;
        newState.round.topic = action.payload.round.topic;
        if (action.payload.players[action.payload.round.chameleon] === state.player_name) {
            newState.round.role = "";
        } else {
            newState.round.role = action.payload.round.word;
        }
        newState.voting.voters = [];
        newState.voting.votes = [];
        for (let v in action.payload.round.voting) {
            let vote = action.payload.round.voting[v].split("|");
            newState.voting.voters.push(vote[0])
            newState.voting.votes.push(vote[1]);
        }
        return newState;
    }

    case "clear_game": {
        let newState = _.cloneDeep(initialState);
        return newState;
    }

    default:
        return state;
    }
};

export default chameleonReducer;
