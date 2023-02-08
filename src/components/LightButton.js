import React from 'react';
import { Image, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { Switch } from "react-native-switch";
import SunImg from "../assets/images/sun.png";
import MoonImg from "../assets/images/moon.png";
import { DARK_THEME, LIGHT_THEME } from "../slices/themeSlice"
import { dark, light } from '../theme/theme';

const lightButton = ({themeCb}) => {
  const [isEnable, setIsEnable] = React.useState(false);
  const dispatch = useDispatch();

  // function that change app theme when toggle value change
  const handleToggle = () => {
    setIsEnable(isEnable => !isEnable);

    if (!isEnable) {
      dispatch(DARK_THEME(dark));
      themeCb(dark.dark);
    } else {
      dispatch(LIGHT_THEME(light));
      themeCb(light.dark);
    }
  };

  return (
    <View style={{margin: 10}}>
      <Switch
        value={isEnable}
        onValueChange={handleToggle}
        circleSize={32}
        renderActiveText={false}
        renderInActiveText={false}
        backgroundActive={"#41c5e2"}
        switchBorderRadius={20}
        circleBorderWidth={1}
        renderInsideCircle={() => (
          isEnable ?
            <Image source={MoonImg} />
            :
            <Image source={SunImg} />
        )}
      />
    </View>
  )
}


export default lightButton;