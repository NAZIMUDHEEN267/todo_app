import { useEffect, useState } from 'react';
import { Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from "react-native-switch";
import SunImg from "../assets/images/sun.png";
import MoonImg from "../assets/images/moon.png";
import { DARK_THEME, LIGHT_THEME } from "../slices/themeSlice"
import { dark, light } from '../theme/theme';
import { PRIMARY_COLOR } from '../constants/colors';

const lightButton = ({ themeCb }) => {

  const [isEnable, setIsEnable] = useState(false);
  const dispatch = useDispatch();
  const storageVal = useSelector((state) => state.theme.theme.dark);

  // theme setting when component first loading time
  useEffect(() => {
    themeCb(storageVal);
    setIsEnable(storageVal);
  }, []);

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
    <View style={{ margin: 10 }}>
      <Switch
        value={isEnable}
        onValueChange={handleToggle}
        circleSize={32}
        renderActiveText={false}
        renderInActiveText={false}
        backgroundActive={PRIMARY_COLOR}
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