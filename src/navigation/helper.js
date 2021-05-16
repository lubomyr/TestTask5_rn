export const PROFILE_BUTTON_ID = 'PROFILE_BUTTON_ID';

export const getTopBarOptions = title => {
  return {
    topBar: {
      title: {
        text: title,
        color: 'white',
      },
      background: {
        color: '#4d089a',
      },
      backButton: {
        color: 'white',
      },
    },
  };
};

export const getTopBarWithProfileOptions = title => {
  const options = getTopBarOptions(title);
  options.topBar.rightButtons = {
    id: PROFILE_BUTTON_ID,
    text: 'Profile',
    color: 'white',
  };
  return options;
};
