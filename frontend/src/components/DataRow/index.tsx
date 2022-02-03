import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type DataRowProps = {
  property: string;
  value: string;
};

export const DataRow: React.FC<DataRowProps> = ({ property, value }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop={1}
      marginBottom={1}
    >
      <Typography variant="body1" marginRight={2}>
        {property}:
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};
