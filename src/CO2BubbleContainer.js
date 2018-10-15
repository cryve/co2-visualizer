import { connect } from 'react-redux';
import CO2Bubble from './CO2Bubble';
import {
    INDICATION_DANGER,
    INDICATION_SAFE_MAX_PPM,
    INDICATION_SAFE,
    INDICATION_WARNING_MAX_PPM,
    INDICATION_WARNING,
    TENDENCY_FALLING,
    TENDENCY_RISING,
    TENDENCY_STAGNATING,
    TENDENCY_STAGNATING_MAX_PPM,
    TENDENCY_STAGNATING_MIN_PPM,
    TENDENCY_UNKNOWN
} from './constants';

const getTendency = (previousPpm, nextPpm) => {
    const difference = nextPpm - previousPpm;

    if (isNaN(difference)) {
        return TENDENCY_UNKNOWN;
    } else if (difference > TENDENCY_STAGNATING_MAX_PPM) {
        return TENDENCY_RISING;
    } else if (difference < TENDENCY_STAGNATING_MIN_PPM) {
        return TENDENCY_FALLING;
    }

    return TENDENCY_STAGNATING;
};

const getIndication = ppm => {
    if (ppm <= INDICATION_SAFE_MAX_PPM) {
        return INDICATION_SAFE;
    } else if (ppm <= INDICATION_WARNING_MAX_PPM) {
        return INDICATION_WARNING;
    }

    return INDICATION_DANGER;
};

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.co2InPpm,
        tendency: getTendency(state.previousCo2InPpm, state.co2InPpm),
        indication: getIndication(state.co2InPpm)
    };
};

const CO2BubbleContainer = connect(mapStateToProps)(CO2Bubble);

export default CO2BubbleContainer;