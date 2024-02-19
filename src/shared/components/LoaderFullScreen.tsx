import { Box, CircularProgress } from "@mui/material";

export default function LoaderFullScreen() {
    return (
        <Box display="flex" flex={1} alignItems="center" justifyContent="center" height="100vh" width="100vw">
            <CircularProgress size={100} />
        </Box>
    );
  }