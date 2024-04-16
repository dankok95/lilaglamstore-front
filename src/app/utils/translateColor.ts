export const translateColor = (color: string) => {
  switch (color) {
    case "Biały":
      return "#FFFFFF";
    case "Czarny":
      return "#000000";
    case "Czerwony":
      return "#FF0000";
    case "Zielony":
      return "#00FF00";
    case "Niebieski":
      return "#042ffd";

    default:
      return color;
  }
};
