<template>
  <section class="phone-page">
    <div class="phone-box">
      <h2>Lia's Phone Number:</h2>
      <div class="phone-highlight">
        <a href="tel:0450901484">0450 901 484</a>
      </div>
    </div>
    
    <div class="contact-list">
      <div class="contact-item">
        <span class="label">Email:</span>
          <a href="mailto:L.Johns.Work@gmail.com">L.Johns.Work@gmail.com</a>
      </div>
      
    </div>

    
  </section>
</template>

<style scoped>
.phone-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
}

h1 {
  font-size: 2.2rem;
  color: #aa88cc;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
  color: #666;
}

.phone-box{
  margin-top: 38%;
  margin-bottom: 10%;
}

.phone-box h2 {
  font-weight: bold;
}

.phone-highlight {
  font-size: 3.5rem;
  margin-bottom: 1.2rem;
  font-weight: bold;
}

.phone-highlight a {
  color: #aa88cc;
  text-decoration: none;
}

.phone-highlight a:hover {
  color: #8844aa;
  text-decoration: underline;
}

.other-details-note {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
  align-items: center;
}

.contact-item {
  font-size: 1.05rem;
}

.contact-item .label {
  font-weight: bold;
  color: #555;
  margin-right: 0.4rem;
}

a {
  color: #aa88cc;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #8844aa;
  text-decoration: underline;
}

.cta {
  font-size: 1rem;
  margin-top: 1.5rem;
  color: #444;
}
</style>
