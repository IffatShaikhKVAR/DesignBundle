import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface TableColumn {
  field: string;
  headerName: string;
}

export interface TableBaseProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  variant?: "simple" | "striped" | "bordered" | "hover" | "compact" | "action";
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

const BaseTable: React.FC<TableBaseProps> = ({
  columns,
  data,
  variant = "simple",
  onEdit,
  onDelete,
}) => {
  const getRowStyle = (index: number) => {
    switch (variant) {
      case "striped":
        return { backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff" };
      case "hover":
        return {
          "&:hover": {
            backgroundColor: "#f1f1f1",
            cursor: "pointer",
          },
        };
      default:
        return {};
    }
  };

  const getCellStyle = () => {
    const styles: React.CSSProperties = {};
    if (variant === "bordered") styles.border = "1px solid #ddd";
    if (variant === "compact") styles.padding = "6px 10px";
    return styles;
  };

  return (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e8eaf6" }}>
            {columns.map((col) => (
              <TableCell key={col.field} sx={{ fontWeight: 600, ...getCellStyle() }}>
                {col.headerName}
              </TableCell>
            ))}
            {variant === "action" && (
              <TableCell sx={{ fontWeight: 600, ...getCellStyle() }}>
                Actions
              </TableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} sx={getRowStyle(index)}>
              {columns.map((col) => (
                <TableCell key={col.field} sx={getCellStyle()}>
                  {row[col.field] ?? "--"}
                </TableCell>
              ))}

              {variant === "action" && (
                <TableCell>
                  <IconButton onClick={() => onEdit && onEdit(row)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete && onDelete(row)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
