import { Subscription } from 'rxjs';

export const cleanUpSubscriptions = (subscriptions: Subscription[]) => {
  subscriptions.forEach(subscription => {
    if (subscription) subscription.unsubscribe();
  });
};