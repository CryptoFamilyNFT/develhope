import { NotificationProvider, useNotification } from "./NotificationContext";
import NotificationList from "./NotificationList";

export default function NotificationApp() {
    const { addNotification } = useNotification()

    const handleAddNotification = (type) => {
        addNotification("Questa è una notifica di tipo: ", type)
    }

    return (
            <div>
                <h1 style={{
                    fontWeight: 'bold'
                }}>
                    Gestione notifiche con useContext e useReducer
                </h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <button onClick={handleAddNotification('warning')} style={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        backgroundColor: 'yellow'
                    }}>
                        Notifica Avviso
                    </button>
                    <button onClick={handleAddNotification('success')} style={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        backgroundColor: 'green'
                    }}>
                        Notifica Success
                    </button>
                    <button onClick={handleAddNotification('info')} style={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        backgroundColor: 'blue'
                    }}>
                        Notifica Info
                    </button>
                    <button onClick={handleAddNotification('error')} style={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        backgroundColor: 'red'
                    }}>
                        Notifica Error
                    </button>
                    <NotificationList />
                </div>
            </div>
    )
}