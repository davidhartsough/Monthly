import { colors } from "../theme";

export default (theme) => ({
  headerStyle: {
    backgroundColor: colors[theme].nav,
    borderColor: colors[theme].border,
  },
  headerTintColor: colors[theme].font,
  cardStyle: {
    backgroundColor: colors[theme].background,
    color: colors[theme].font,
  },
});
