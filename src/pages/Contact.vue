<template>
    <section class="contact-page">
      <h1>Let’s Connect</h1>
      <p class="subtitle">I’m open to freelance work, collaborations, and full-time opportunities.</p>
  
      <div class="contact-list">
        <div class="contact-item">
          <span class="label">Email:</span>
          <a href="mailto:L.Johns.Work@gmail.com">L.Johns.Work@gmail.com</a>
        </div>
  
        <div class="contact-item">
          <span class="label">Phone:</span>
          <a href="tel:0450901484">0450 901 484</a>
        </div>
  
        <div class="contact-item">
          <span class="label">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/liam-johns-46820510b" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/liam-johns-46820510b
          </a>
        </div>
      </div>
  
      <div class="cta">
        <p>Want to chat about a project or role? I’d love to hear from you!</p>
      </div>
    </section>
  </template>
  
  <style scoped>
.contact-page {
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
