export default function NotificationApp()
{
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
            <button style={{
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: 'yellow'
            }}>
                Notifica Avviso
            </button>
            <button style={{
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: 'green'
            }}>
                Notifica Success
            </button>
            <button style={{
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: 'blue'
            }}>
                Notifica Info
            </button>
            <button style={{
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: 'red'
            }}>
                Notifica Error
            </button>
        </div>
    </div>
)
}