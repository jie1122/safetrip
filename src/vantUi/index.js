
import { NavBar,Field, CellGroup ,Cell,Button,DatetimePicker,Popup} from 'vant';

export default {
  install: (app, options) => {
    app
    .use(NavBar)
    .use(Field)
    .use(CellGroup)
    .use(Cell)
    .use(Button)
    .use(DatetimePicker)
    .use(Popup)
  }
}