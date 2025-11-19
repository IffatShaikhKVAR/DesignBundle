// components/Pagination/CustomPaginations.tsx
import React, { useState } from "react";
import {
  Stack,
  Pagination,
  Typography,
  IconButton,
  Button,
  Box,
  TextField,
  Chip,
  MenuItem,
  Select,
 type SelectChangeEvent,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

/* ============================================
   1️⃣ STANDARD PAGINATION
   ============================================ */
export const StandardPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Standard Pagination
      </Typography>
      <Pagination
        count={10}
        page={page}
        onChange={(_, value) => setPage(value)}
        color="primary"
      />
      <Typography variant="body2" color="textSecondary">
        Page {page} of 10
      </Typography>
    </Stack>
  );
};

/* ============================================
   2️⃣ ROUNDED PAGINATION
   ============================================ */
export const RoundedPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Rounded Pagination
      </Typography>
      <Pagination
        count={10}
        page={page}
        onChange={(_, value) => setPage(value)}
        shape="rounded"
        color="secondary"
        variant="outlined"
      />
      <Typography variant="body2" color="textSecondary">
        Page {page} of 10
      </Typography>
    </Stack>
  );
};

/* ============================================
   3️⃣ BUTTON PAGINATION (Prev/Next)
   ============================================ */
export const ButtonPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, 10));

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Button Pagination
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <IconButton
          color="primary"
          disabled={page === 1}
          onClick={handlePrev}
          sx={{
            backgroundColor: page === 1 ? "transparent" : "#f0f0f0",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: 600, minWidth: "100px", textAlign: "center" }}>
          Page {page} of 10
        </Typography>
        <IconButton
          color="primary"
          disabled={page === 10}
          onClick={handleNext}
          sx={{
            backgroundColor: page === 10 ? "transparent" : "#f0f0f0",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Stack>
    </Stack>
  );
};

/* ============================================
   4️⃣ COMPACT PAGINATION
   ============================================ */
export const CompactPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Compact Pagination
      </Typography>
      <Pagination
        count={8}
        page={page}
        onChange={(_, value) => setPage(value)}
        size="small"
        variant="text"
        color="standard"
      />
      <Typography variant="caption" color="textSecondary">
        Showing page {page} of 8
      </Typography>
    </Stack>
  );
};

/* ============================================
   5️⃣ LOAD MORE PAGINATION
   ============================================ */
export const LoadMorePagination: React.FC = () => {
  const [page, setPage] = useState(1);
  const handleLoadMore = () => setPage((p) => Math.min(p + 1, 10));

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Load More Pagination
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Showing page {page} of 10
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLoadMore}
        disabled={page >= 10}
        sx={{
          borderRadius: "20px",
          px: 3,
          py: 1,
        }}
      >
        {page < 10 ? "📥 Load More" : "✓ No More Pages"}
      </Button>
    </Stack>
  );
};

/* ============================================
   6️⃣ DOT PAGINATION (for carousels)
   ============================================ */
export const DotPagination: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = 5;

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Dot Pagination
      </Typography>
      <Stack direction="row" spacing={1}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Box
            key={index}
            onClick={() => setPage(index)}
            sx={{
              width: page === index ? 32 : 12,
              height: 12,
              borderRadius: "6px",
              backgroundColor: page === index ? "#2575fc" : "#e0e0e0",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: page === index ? "#2575fc" : "#d0d0d0" },
            }}
          />
        ))}
      </Stack>
      <Typography variant="body2" color="textSecondary">
        {page + 1} / {totalPages}
      </Typography>
    </Stack>
  );
};

/* ============================================
   7️⃣ INPUT PAGINATION (Go to page)
   ============================================ */
export const InputPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");

  const handleGoToPage = () => {
    const num = parseInt(inputValue, 10);
    if (num >= 1 && num <= 10) {
      setPage(num);
    } else {
      setInputValue(page.toString());
    }
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Input Pagination
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2">Go to page:</Typography>
        <TextField
          type="number"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleGoToPage()}
          inputProps={{ min: 1, max: 10 }}
          sx={{ width: "80px" }}
        />
        <Typography variant="body2">/</Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          10
        </Typography>
        <Button variant="contained" size="small" onClick={handleGoToPage}>
          Go
        </Button>
      </Stack>
      <Typography variant="body2" color="textSecondary">
        Currently on page {page}
      </Typography>
    </Stack>
  );
};

/* ============================================
   8️⃣ STEP PAGINATION (Progress steps)
   ============================================ */
export const StepPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  const steps = ["Start", "Confirm", "Process", "Complete"];

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Step Pagination
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        {steps.map((step, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              onClick={() => setPage(index + 1)}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: page >= index + 1 ? "#2575fc" : "#e0e0e0",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
            >
              {index + 1}
            </Box>
            {index < steps.length - 1 && (
              <Box
                sx={{
                  width: 40,
                  height: 2,
                  backgroundColor: page > index + 1 ? "#2575fc" : "#e0e0e0",
                  transition: "all 0.3s ease",
                }}
              />
            )}
          </Box>
        ))}
      </Stack>
      <Typography variant="body2" color="textSecondary">
        {steps[page - 1]}
      </Typography>
    </Stack>
  );
};

/* ============================================
   9️⃣ CHIP PAGINATION
   ============================================ */
export const ChipPagination: React.FC = () => {
  const [page, setPage] = useState(1);
  const pages = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Chip Pagination
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ justifyContent: "center" }}>
        {pages.map((p) => (
          <Chip
            key={p}
            label={p}
            onClick={() => setPage(p)}
            color={page === p ? "primary" : "default"}
            variant={page === p ? "filled" : "outlined"}
            sx={{
              cursor: "pointer",
              fontWeight: page === p ? 600 : 400,
              transition: "all 0.2s",
            }}
          />
        ))}
      </Stack>
      <Typography variant="body2" color="textSecondary">
        Page {page} of {pages.length}
      </Typography>
    </Stack>
  );
};

/* ============================================
   🔟 GRADIENT PAGINATION
   ============================================ */
export const GradientPagination: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Gradient Pagination
      </Typography>
      <Stack direction="row" spacing={0.5}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Box
            key={index}
            onClick={() => setPage(index + 1)}
            sx={{
              width: 40,
              height: 40,
              borderRadius: "8px",
              background:
                page === index + 1
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : page > index + 1
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "#e0e0e0",
              color: page >= index + 1 ? "white" : "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontWeight: 600,
              transition: "all 0.3s ease",
              boxShadow: page === index + 1 ? "0 4px 12px rgba(102, 126, 234, 0.4)" : "none",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            {index + 1}
          </Box>
        ))}
      </Stack>
      <Typography variant="body2" color="textSecondary">
        Page {page} of 8
      </Typography>
    </Stack>
  );
};

export const TableStylePagination: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalItems = 42;

  const handleChangeRowsPerPage = (
  event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<number>
) => {
  setRowsPerPage(Number(event.target.value));
  setPage(0);
};


  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setPage((prev) =>
      (prev + 1) * rowsPerPage < totalItems ? prev + 1 : prev
    );

  const start = page * rowsPerPage + 1;
  const end = Math.min((page + 1) * rowsPerPage, totalItems);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        p: 1.5,
        px: 2,
        width: "fit-content",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Rows per page selector */}
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Typography variant="body2" color="textSecondary">
          Rows per page:
        </Typography>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          size="small"
          sx={{
            fontSize: "0.875rem",
            minWidth: 70,
            "& .MuiSelect-select": { py: 0.5 },
          }}
        >
          {[5, 10, 20, 50].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      {/* Range display */}
      <Typography variant="body2" color="textSecondary">
        {`${start}–${end} of ${totalItems}`}
      </Typography>

      {/* Navigation buttons */}
      <Stack direction="row" spacing={0.5}>
        <IconButton
          size="small"
          onClick={handlePrev}
          disabled={page === 0}
          sx={{
            "&.Mui-disabled": { opacity: 0.4 },
          }}
        >
          <ArrowBack fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={handleNext}
          disabled={(page + 1) * rowsPerPage >= totalItems}
          sx={{
            "&.Mui-disabled": { opacity: 0.4 },
          }}
        >
          <ArrowForward fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

/* ============================================
   EXPORT ALL
   ============================================ */
export const PaginationVariants = {
  StandardPagination,
  RoundedPagination,
  ButtonPagination,
  CompactPagination,
  LoadMorePagination,
  DotPagination,
  InputPagination,
  StepPagination,
  ChipPagination,
  GradientPagination,
  TableStylePagination, // 👈 added here
};

