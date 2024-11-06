import React from 'react';
import AdminLayout from './Layouts/AdminLayouts';
import Mahasiswa from './Pages/Admin/Mahasiswa';

const App = () => {
    return (
      <AdminLayout>
        <Mahasiswa />
      </AdminLayout>
    );
  };

export default App;
