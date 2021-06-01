//Login actions
export const ON_CHANGE_EMAIL = () => ({
    type: ON_CHANGE_EMAIL,
    payload: email,
});

export const ON_CHANGE_PASSWORD = () => ({
    type: ON_CHANGE_PASSWORD,
    payload: password,
});

export const LOG_IN = () => ({
    type: LOG_IN,
});

export const LOG_OUT = () => ({
    type: LOG_OUT,
});

//feeds actions

export const LOAD_MORE = () => ({
    type: LOAD_MORE,
});

export const HANDLE_REFRESH = () => ({
    type: HANDLE_REFRESH,
});