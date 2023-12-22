import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Checkbox,
} from "@mui/material";

interface SelectableCardProps {
  image: string;
  title: string;
  subtitle: string;
  onSelect: () => void;
  selected: boolean;
}

const SelectableCard: React.FC<SelectableCardProps> = ({
  image,
  title,
  subtitle,
  onSelect,
  selected,
}) => {
  return (
    <Card
      onClick={onSelect}
      style={{
        cursor: "pointer",
        border: selected ? "2px solid blue" : "2px solid transparent",
        position: "relative",
      }}
    >
      <Checkbox
        checked={selected}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "4px",
          zIndex: 1,
        }}
      />
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent
        style={{
          backgroundColor: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",          
        }}
      >
        <Typography variant="subtitle1" color="text.secondary" style={{ fontFamily: 'Adobe Clean, sans-serif' }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" component="div" style={{ fontWeight: "bold", fontFamily: 'Adobe Clean, sans-serif' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SelectableCard;
