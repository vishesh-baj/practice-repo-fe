// We require total of three components to make an accordian work
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* Its a wrapper component */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          iusto, laboriosam in voluptates assumenda corporis nisi dolor pariatur
          dolorum laudantium tempore iure, aliquam ex dolores esse odit
          accusamus, fugit tempora?
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          iusto, laboriosam in voluptates assumenda corporis nisi dolor pariatur
          dolorum laudantium tempore iure, aliquam ex dolores esse odit
          accusamus, fugit tempora?
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          iusto, laboriosam in voluptates assumenda corporis nisi dolor pariatur
          dolorum laudantium tempore iure, aliquam ex dolores esse odit
          accusamus, fugit tempora?
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordian;
