import  { EMIT_CO2_MEASUREMENT } from './actions';

const initialState = {
    co2InPpm: 0,
    previousCo2InPpm: 0
};

const co2Measurement = (state = initialState, action) => {
    switch (action.type) {
        case EMIT_CO2_MEASUREMENT:
            return {
                ...state,
                previousCo2InPpm: state.co2InPpm,
                co2InPpm: action.ppm
            };
        default:
            return state;
    }
};

export default co2Measurement;