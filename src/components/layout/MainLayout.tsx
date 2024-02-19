import { Button, Layout,  } from 'antd';
const { Header, Content, Footer,  } = Layout;


import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import { useAppDispatch } from './../../redux/hook';
import { logout } from '../../redux/features/auth/authSlice';

// const items: MenuProps['items'] = [
//    {
//       key: '1',
//       label: 'Dashboard',
//    },
//    {
//       key: '2',
//       label: 'Profile',
//    },

//    {
//       key: '3',
//       label: 'User Management',
//       children:[
//          {
//             key: 'Create Admin',
//             label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>,
//          },
//          {
//             key: 'Create Faculty',
//             label: <NavLink to={'/admin/create-faculty'}>Create Faculty</NavLink>,
//          },
//          {
//             key: 'Create Student',
//             label: <NavLink to={'/admin/create-student'}>Create Student</NavLink>,
//          },
//       ]
//    }
// ]


const MainLayout = () => {

  const dispatch =  useAppDispatch();
  const handleLogout=()=>{
    dispatch(logout())
  }

   return (
      <Layout style={{height: '100vh'}}>
      <Sidebar/>
      <Layout>
        <Header> <Button onClick={handleLogout}>Logout</Button> </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
   );
};

export default MainLayout;