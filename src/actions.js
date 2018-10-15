export const EMIT_CO2_MEASUREMENT = 'EMIT_CO2_MEASUREMENT';


export const emitCo2Measurement = co2InPpm => ({
    type: EMIT_CO2_MEASUREMENT,
    ppm: co2InPpm
});
