import { notification } from 'antd';
import { NotificationProps } from './Notification.props';

const Notification: any = (props: NotificationProps) => {
  const { config, type = 'error', ...rest } = props;

  notification.config(config);
  
  return notification[type](rest);
};

export default Notification;
