import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";
import { LoginButton } from "./login";
import { LogoutButton } from "./logout";
import ReactSwitch from "react-switch";
import './App.css';
import 'styled-components'
import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import Batman1 from "./Usecontext";



export const themeContext = createContext(null);




const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const { isAuthenticated } = useAuth0();


  //1 - Configurar los hooks
  const [users, setUsers] = useState([])

  //2 - Función para mostrar los datos con fetch
  const URL = 'https://api.escuelajs.co/api/v1/products'
  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect(() => {
    showData()
  }, [])

  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'Titulo',
      selector: row => row.title
    },
    {
      name: 'Precio',
      selector: row => row.price
    },
    {
      name: 'Descripcion',
      selector: row => row.description
    },
    {
      name: 'Images',
      selector: row => row.images
    },

  ]

  const MyComponent = () => (
    <DataTable
      title="Arnold Movies"
      columns={columns}
      theme="solarized"
    />
  );

  return (
    <themeContext.Provider value={theme}>
      <div className="outerdiv" id={theme}>
        <div className="App">
          <header className="App-header" >
            <Batman1 />
            {isAuthenticated ? (
              <>
                <h1>Examen en React</h1>
                <DataTable
                  columns={columns}
                  data={users}
                  pagination
                />
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </header>
          <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;