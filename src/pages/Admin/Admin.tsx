import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Fab,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import './Admin.scss';

interface Guest {
  id: string;
  name: string;
  table: number;
}

const Admin: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [filteredGuests, setFilteredGuests] = useState<Guest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null);
  const [formData, setFormData] = useState<{
    name: string;
    table: string;
  }>({
    name: '',
    table: '',
  });
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Fetch guests from Firebase with real-time updates
  useEffect(() => {
    const q = collection(db, "guest_list");
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setGuests(guestsData as Guest[]);
      setFilteredGuests(guestsData as Guest[]);
    });

    return () => unsubscribe();
  }, []);

  // Search functionality
  useEffect(() => {
    const filtered = guests.filter(guest =>
      guest.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGuests(filtered);
  }, [guests, searchQuery]);

  // Handle table input change - only allow numbers
  const handleTableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setFormData({ ...formData, table: value });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      if (!formData.name.trim()) {
        setSnackbar({
          open: true,
          message: 'Vui lòng nhập tên khách',
          severity: 'error',
        });
        return;
      }

      if (!formData.table.trim()) {
        setSnackbar({
          open: true,
          message: 'Vui lòng nhập số bàn',
          severity: 'error',
        });
        return;
      }

      // Convert table to number for submission
      const submissionData = {
        ...formData,
        table: parseInt(formData.table) || 1,
      };

      if (editingGuest) {
        // Update existing guest
        await updateDoc(doc(db, 'guest_list', editingGuest.id), submissionData);
        setSnackbar({
          open: true,
          message: 'Cập nhật khách thành công',
          severity: 'success',
        });
      } else {
        // Add new guest
        await addDoc(collection(db, 'guest_list'), submissionData);
        setSnackbar({
          open: true,
          message: 'Thêm khách thành công',
          severity: 'success',
        });
      }

      setOpenDialog(false);
      setEditingGuest(null);
      setFormData({
        name: '',
        table: '',
      });
      // No need to call fetchGuests() - onSnapshot will update automatically
    } catch (error) {
      console.error('Error saving guest:', error);
      setSnackbar({
        open: true,
        message: 'Lỗi khi lưu khách',
        severity: 'error',
      });
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa khách này?')) {
      try {
        await deleteDoc(doc(db, 'guest_list', id));
        setSnackbar({
          open: true,
          message: 'Xóa khách thành công',
          severity: 'success',
        });
        // No need to call fetchGuests() - onSnapshot will update automatically
      } catch (error) {
        console.error('Error deleting guest:', error);
        setSnackbar({
          open: true,
          message: 'Lỗi khi xóa khách',
          severity: 'error',
        });
      }
    }
  };

  // Open dialog for add/edit
  const openAddDialog = () => {
    setEditingGuest(null);
    setFormData({
      name: '',
      table: '',
    });
    setOpenDialog(true);
  };

  const openEditDialog = (guest: Guest) => {
    setEditingGuest(guest);
    setFormData({
      name: guest.name,
      table: String(guest.table),
    });
    setOpenDialog(true);
  };

  return (
    <div className="admin-screen">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel - Quản lý khách mời
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4">
              Danh sách khách mời
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tổng số: {filteredGuests.length} khách
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
          <div className="relative bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-primary/20 p-2 flex items-center">
            <span className="material-icons text-primary/50 ml-3">search</span>
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-primary dark:text-primary placeholder-primary/40 font-sans text-lg px-4 py-2"
              placeholder="Tìm kiếm theo tên..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tên</TableCell>
                  <TableCell>Bàn</TableCell>
                  <TableCell align="right">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredGuests.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
                      <Typography color="text.secondary">
                        {searchQuery ? 'Không tìm thấy khách phù hợp' : 'Không có dữ liệu khách'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredGuests.map((guest) => (
                    <TableRow key={guest.id}>
                      <TableCell>{guest.name}</TableCell>
                      <TableCell>{guest.table}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          onClick={() => openEditDialog(guest)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(guest.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={openAddDialog}
      >
        <AddIcon />
      </Fab>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingGuest ? 'Sửa khách mời' : 'Thêm khách mời'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Tên khách"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Số bàn"
              value={formData.table}
              onChange={handleTableChange}
              margin="normal"
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} startIcon={<CancelIcon />}>
            Hủy
          </Button>
          <Button onClick={handleSubmit} variant="contained" startIcon={<SaveIcon />}>
            {editingGuest ? 'Cập nhật' : 'Thêm'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Admin;
