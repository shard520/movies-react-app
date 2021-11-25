import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from '@mui/material';

export const ActorList = ({ actors }) => {
  return (
    <Paper variant="outlined" sx={{ mb: 1.5, width: '90%' }}>
      <Accordion sx={{ '&::before': { display: 'none' } }} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="actorList"
          aria-controls="expandedActorList"
        >
          Starring:
        </AccordionSummary>
        <AccordionDetails>
          {actors.map((actor, i) => (
            <Typography key={i} variant="body1">
              {actor}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
