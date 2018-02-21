import {WorkTracker} from 'ng2-loading-pane';

declare type Dispatcher<T> = (action: Action<T>, tracker?: WorkTracker) => Promise<T>;
declare type Action<T> = (state: T) => Promise<T>;

export interface Store<T> {
  dispatch: Dispatcher<T>;
  state: T;
}

export const CreateStore = <T>(initialState: T,
                               errorLogger?: (err: any) => void,
                               defaultTracker?: WorkTracker): Store<T> => {
  let theStorySoFar = Promise.resolve<T>(initialState);
  const store: Store<T> = {
    state: initialState,
    dispatch: async (action: Action<T>, tracker?: WorkTracker) => {
      theStorySoFar = theStorySoFar
        .catch(err => {
          if (errorLogger) {
            errorLogger(err);
          }
        }).then(async () => {
          store.state = await action(store.state);
          return store.state;
        });
      if (tracker) {
        tracker.track(theStorySoFar);
      } else if (defaultTracker) {
        defaultTracker.track(theStorySoFar);
      }
      return await theStorySoFar;
    }
  };
  return store;
};
