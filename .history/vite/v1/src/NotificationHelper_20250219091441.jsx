export function useNotificationState(){
    const context = useContext(NotificationStateContext)

    if (context === undefined) {
        throw new Error("useNotificationState deve essere usato dentro il provider")
    }
}

export function useNotificationDispatch(){
    const context = useContext(NotificationDispatchContext)

    if (context === undefined) {
        throw new Error("useNotificationDispatch deve essere usato dentro il provider")
    }
}

export function useNotification() {
    const dispatch = useNotificationDispatch();

    function addNotification(message, type = "info") {
        const id = Date.now();
        dispatch({
            type: ADD_NOTIFICATION,
            payload: {id, message, type}
        })

        setTimeout(() => {
            dispatch({
                type: REMOVE_NOTIFICATION,
                payload: id
            })
        }, 7000)
    }

    function removeNotification(id) {
        dispatch({
            type: REMOVE_NOTIFICATION,
            payload: id
        })
    }

    return {addNotification, removeNotification}
}