import { useNotificationState } from "./NotificationContext";
import clsx from "clsx";

const notificationStyles = `
    padding: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const errorStyle = `
    background-color: red;
    color: white;
`;

const warningStyle = `
    background-color: yellow;
    color: black;
`;

const infoStyle = `
    background-color: blue;
    color: white;
`;

export default function NotificationList() {
    const notification = useNotificationState();

    return (
    <div style={{position: 'fixed', top: '50%', left: '50%', padding: 2}}>
        {notification.map(({id, message, type}) => {
            return (
                <div key={id} className={clsx(
                    notificationStyles,
                    {
                        "notification--error": type === errorStyle,
                        "notification--warning": type === warningStyle,
                        "notification--info": type === infoStyle,
                    }
                )}>
                    <span>{message}</span>
                </div>
            )
        })}
    </div>
    )
}