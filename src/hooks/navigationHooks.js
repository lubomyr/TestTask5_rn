import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';

export function useNavigationButtonPressed(
  handler: (event: NavigationButtonPressedEvent) => void,
  componentId: string,
) {
  useEffect(() => {
    const sub = Navigation.events().registerNavigationButtonPressedListener(
      (event: NavigationButtonPressedEvent) => {
        if (event.componentId === componentId) {
          handler(event);
        }
      },
    );
    return () => {
      sub.remove();
    };
  }, [componentId]);
}
