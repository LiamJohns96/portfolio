<template>
    <header class="header">
      <nav class="nav">
        <h1 class="logo">Portfolio</h1>
        <ul>
            <li>
                <router-link 
                to="/" 
                class="links" 
                exact-active-class="selected"
                >Projects</router-link>
            </li>
            <li>
                <router-link 
                to="/resume" 
                class="links" 
                exact-active-class="selected"
                >Resume</router-link>
            </li>
            <li>
                <router-link 
                to="/contact" 
                class="links" 
                exact-active-class="selected"
                >Contact</router-link>
            </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
  background-color: #fff;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  width: 100%;
  margin-bottom: 3rem;
  padding-left: 0rem;
  padding-right: 0rem;
}

nav {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* allow wrapping for mobile */
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #aa88cc;
  letter-spacing: 1px;
}

ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.links {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  padding: 10px;
  transition: color 0.3s ease;
}

.selected {
  color: #aa88cc;
  /* font-weight: bold; */
  /* border-bottom: 2px solid #aa88cc; */
}

.links:hover {
  color: #aa88cc;
  padding: 10px;
  border-radius: 5px;
}

/* === MOBILE STYLES === */
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    margin-bottom: 1rem;
  }

  ul {
    flex-direction:row;
    align-items: center;
    gap: 1rem;
  }
}

  </style>
  