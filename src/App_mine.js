import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'


//  lesson#6 only deploys UsersList and NotesList
//  lesson#7 proceed to EditUser (which display EditUserForm) and NewUserForm
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} > {/* Only for localhost:3000 */}
        <Route index  element={<Public/>} />
        <Route path="login" element={<Login/>} />
      </Route>   {/* Only for localhost:3000 */}

        <Route element={<PersistLogin />}>
        <Route element={<Prefetch />}>

      <Route path="dash" element={<DashLayout/>} >
        <Route index element={<Welcome/>} />



        <Route path="notes">
          <Route index element={<NotesList/>} />

              <Route path=":id" element={<EditNote />} />
              <Route path="new" element={<NewNote />} />
        </Route>

        <Route path="users">
          <Route index element={<UsersList/>} />

          <Route path=":id" element={<EditUser />} />
          <Route path="new" element={<NewUserForm />} />

        </Route>

      </Route> {/* end of dash */}

</Route>
 </Route>
    </Routes>
  );
}

export default App;
