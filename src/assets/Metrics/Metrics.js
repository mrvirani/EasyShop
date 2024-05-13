
import { Dimensions, Platform } from 'react-native';
import { scale } from '../../utiles/helper/function';

const { width, height } = Dimensions.get('window');

let screenHeight = width < height ? height : width
let screenWidth = width < height ? width : height

const Metrics = {
    navBarHeight: Platform.OS == 'ios' ? (screenHeight >= 812 ? 44 : 20) : 0,
    screenHeight: screenHeight,
    screenWidth: screenWidth,
    CountScale: (val) => {
        return scale(val);
    },
};

export default Metrics;
