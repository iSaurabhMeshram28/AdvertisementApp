import { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import SelectableCard from "../components/SelectableCard";
import { useHistory } from "react-router-dom";

const CreateAdsPage = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const history = useHistory();

  const handleSelect = (cardTitle: string) => {
    setSelectedCard(cardTitle);
  };

  const handleNext = () => {
    if (selectedCard === "Card 1") {
      history.push("/text-ad-form");
    } else if (selectedCard === "Card 2") {
      history.push("/media-ad-form");
    }
  };
  
  return (
    <div style={{ height: `calc(100vh - 125px)`, padding: "30px" }}>
      {/* Assuming your navbar has a fixed height of 64px */}
      <Card style={{ height: "100%", width: "100%" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontWeight: "bold",
              fontFamily: "Adobe Clean, sans-serif",
              padding: "10px",
              paddingLeft: "13px",
            }}
          >
            Create Ads
          </Typography>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ flex: "50%", padding: "20px", maxWidth: "300px" }}>
                <SelectableCard
                  image="/images/Text.jpg"
                  title="Text Ad"
                  subtitle="Create"
                  onSelect={() => handleSelect("Card 1")}                  
                  selected={selectedCard === "Card 1"}
                />
              </div>
              <div style={{ flex: "50%", padding: "20px", maxWidth: "300px" }}>
                <SelectableCard
                  image="/images/Media.jpg"
                  title="Media Ad"
                  subtitle="Create"
                  onSelect={() => handleSelect("Card 2")}                  
                  selected={selectedCard === "Card 2"}
                />
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{ position: "absolute", bottom: "40px", right: "40px", fontFamily: 'Adobe Clean, sans-serif' }}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateAdsPage;
