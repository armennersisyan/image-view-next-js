import { createUseStyles } from 'react-jss'
import { Colors, FontFamily } from '../../constants/Constants';

const useImageStyles = createUseStyles({
  image: `
    font-family: ${FontFamily.Normal};
    width: 100%;
    background-color: ${Colors.LightGray};
    padding: 91px 24px;
  `,
})

export default useImageStyles
