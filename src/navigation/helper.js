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
    },
  };
};

export const getTopBarWithProfileOptions = title => {
  const options = getTopBarOptions(title);
  options.topBar.rightButtons = {
    id: 'PROFILE_BUTTON_ID',
    text: 'Profile',
    color: 'white',
  };
  return options;
};
